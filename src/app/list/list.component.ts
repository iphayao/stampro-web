import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import * as firebase from 'firebase/app';
//import { AppComponent } from '../app.component';
import { FirebasedbService } from '../providers/firebasedb.service';
import { AuthService } from '../providers/auth.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  //items: FirebaseListObservable<any[]>;
  items;
  constructor(db: FirebasedbService, auth: AuthService) {
    //this.items = db.list("/items");
    var uid = auth.uid;
    console.log("this is : ", uid);
    this.items = db.QueryStampCollection(auth.uid);
  }

  ngOnInit() {
  }

}
