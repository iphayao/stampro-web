import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UidService } from '../providers/uid.service';
import { FirebasedbService } from '../providers/firebasedb.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  items;
  collection_id;
  constructor(route: ActivatedRoute, db: FirebasedbService, uuid: UidService) {
    console.log(route.snapshot.params['id']);
    console.log(uuid.generate());
    var uid = "qy98TC0N1GXSQbWrValoU895N0u1";
    this.collection_id = route.snapshot.params['id'];
    this.items = db.QueryStamps(uid, this.collection_id);
  }

  ngOnInit() {
  }

}
