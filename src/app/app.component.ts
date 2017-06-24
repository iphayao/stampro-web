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
  //result: string;
  constructor(public db: AngularFireDatabase, public af: AngularFireAuth, public dlg: MdDialog) {
    this.items = db.list('/items');
    this.user = af.authState;
  }

  openDialog() {
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
    });
  }
}

@Component({
  templateUrl: './app.component.dialog.html',
})

export class AppDialog {
  constructor(public dlgRef: MdDialogRef<AppDialog>) {}
}
