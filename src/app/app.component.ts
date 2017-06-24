import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Stampro';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  authmenu: string;
  //result: string;
  constructor(public db: AngularFireDatabase, public af: AngularFireAuth, public dlg: MdDialog) {
    this.user = af.authState;
    // load items from firebase RTDB
    this.items = db.list('/items');
    this.user.subscribe(auth => {
      if(auth) {
        console.log("user", auth.uid);
        this.authmenu = "Logout";

      }
      else {
        console.log("user not login");
        this.authmenu = "Login"
      }
    });
  }

  authAction() {
    this.user.subscribe(auth => {
      if(auth) {
        this.signOut();
      }
      else {
        this.signIn();
      }
    });
  }

  signIn() {
    let dlgRef = this.dlg.open(AppDialog);
    dlgRef.afterClosed().subscribe(result => {
      console.log(`dialog result: ${result}`);

      var auth = null;
      switch(result) {
        case "facebook":
            auth = new firebase.auth.FacebookAuthProvider();
            break;
        case "google":
            auth = new firebase.auth.GoogleAuthProvider();
            break;
        case "twitter":
            auth = new firebase.auth.TwitterAuthProvider();
            break;
        default:
            auth = new firebase.auth.GoogleAuthProvider();
            break;
      }
      this.af.auth.signInWithRedirect(auth);
      this.user = this.af.authState;
    });
  }

  signOut() {
    this.af.auth.signOut().then(
      x => location.reload()
    );
  }
}

@Component({
  templateUrl: './app.component.dialog.html',
})

export class AppDialog {
  constructor(public dlgRef: MdDialogRef<AppDialog>) {}
}
