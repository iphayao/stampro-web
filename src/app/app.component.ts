import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Stampro';
  //user: Observable<firebase.User>;
  authmenu: string;
  //result: string;
  constructor(public auth: AuthService, public dlg: MdDialog) {
    //this.user = af.authState;
    auth.user.subscribe(auth => {
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
    this.auth.user.subscribe(auth => {
      if(auth) {
        this.auth.SignOut();
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
      this.auth.SignIn(result);
      /*var auth = null;
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
      }
      if(auth) {
        this.af.auth.signInWithRedirect(auth);
        this.user = this.af.authState;
      }*/
    });
  }

  /*signOut() {
    this.af.auth.signOut().then(
      x => location.reload()
    );
  }*/
}

@Component({
  templateUrl: './app.component.dialog.html',
})

export class AppDialog {
  constructor(public dlgRef: MdDialogRef<AppDialog>) {}
}
