import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  uid: string;// = "qy98TC0N1GXSQbWrValoU895N0u1";
  constructor(public fa: AngularFireAuth, public router: Router) { 
    this.user = fa.authState;
    var x;
    if(fa.auth) {
      console.log(fa.auth);
      this.user.subscribe(a => {
          x = a.uid
      }).unsubscribe();
      //this.uid = x;
    }
    fa.auth.onAuthStateChanged(function(user) {
      if(user) {
        this.uid = user.uid;
        console.log("xxxxxx",user.uid);
        console.log("yyyyy", this.uid);
      }
      else {
        console.log("No user");
      }
    });
    // while(1) {
    //   console.log("what the fuck", this.uid);
    // }
    
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
      this.fa.auth.signInWithRedirect(authProvider).then(
        this.fa.auth.onAuthStateChanged(function(user) {
          this.uid = user.uid;
        })
      );
    }
  };

  public SignOut() {
    this.fa.auth.signOut().then( x => this.router.navigate(["/"]))
    location.reload();
  };

}
