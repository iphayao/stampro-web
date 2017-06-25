import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import * as firebase from 'firebase/app';
//import { AppComponent } from '../app.component';
import { FirebasedbService } from '../providers/firebasedb.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  //items: FirebaseListObservable<any[]>;
  items;
  constructor(db: FirebasedbService) {
    //this.items = db.list("/items");
    this.items = db.QueryStampCollection("qy98TC0N1GXSQbWrValoU895N0u1");
  }

  ngOnInit() {
  }

}
