import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import * as firebase from 'firebase/app';
//import { AppComponent } from '../app.component';
import { FirebasedbService } from '../providers/firebasedb.service';
import { AuthService } from '../providers/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  items;
  constructor(db: FirebasedbService, auth: AuthService, public router: Router) {
    console.log("this is : ", auth.uid);
    this.items = db.QueryStampCollection(auth.uid);
  }

  ngOnInit() {
  }

  public add_collection() {
    this.router.navigate(["collection/add"]);
  }

}


