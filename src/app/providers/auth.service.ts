import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  uid: string = "qy98TC0N1GXSQbWrValoU895N0u1";
  constructor(public fa: AngularFireAuth, public router: Router) { 
    this.user = fa.authState;
  }

  public SignIn(provider: string) { 
    var authProvider = null;
    switch(provider) {
      case "facebook":
        authProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "google":
        authProvider = new firebase.auth.GoogleAuthProvider();
        break;
      case "twitter":
        authProvider = new firebase.auth.TwitterAuthProvider();
        break;
    }
    if(authProvider) {
      this.fa.auth.signInWithRedirect(authProvider);
    }
  };

  public SignOut() {
    this.fa.auth.signOut().then( x => this.router.navigate(["/"]))
    location.reload();
  };

}
