import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { UidService } from '../providers/uid.service';
import { FirebasedbService } from '../providers/firebasedb.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  items;
  collection_id;
  constructor(route: ActivatedRoute, public db: FirebasedbService, public auth: AuthService, public uuid: UidService, public dlg: MdDialog) {
    console.log(route.snapshot.params['id']);
    console.log(uuid.generate());
    this.collection_id = route.snapshot.params['id'];
    auth.user.subscribe(u => {
      if(u) {
        this.items = db.query_stamps(u.uid, this.collection_id);
      }
    })
  }

  ngOnInit() {
  }

  public add_stamp() {

    // for(var i = 0;i < 8; i++) {
    //   this.items.push("null");
    // }

    var stamp_id = this.uuid.generate();
    var x = [];
    this.items.subscribe(
      items => {
        items.map(item => x.push(item))
      }
    );
    var match_obj = x.filter(i => i.$value == "null");
    if(match_obj.length > 0) {
      var stamp_key = match_obj[0].$key;
      this.auth.user.subscribe(u => {
        if(u) {
          this.db.update_stamps(u.uid, this.collection_id, stamp_key, stamp_id);
        }
      });
      
    }
    else {
      this.dlg.open(CollectionDialog);
    }
  }

}

@Component({
  template: `<h2 md-dialog-content>Stamp Collect Fulled</h2>`
})

export class CollectionDialog {
  mesage;
  constructor(public dlgRef: MdDialogRef<CollectionDialog>) {}

  // public setMessage(message: string) {
  //   this.mesage = message;
  // }
}

@Component({
  selector: 'app-list',
  templateUrl: 'collection.component.add.html',
  styleUrls: ['./collection.component.css']
})

export class AddStampCollection {
  constructor(public db: FirebasedbService, public auth: AuthService, public uuid: UidService, public router: Router) {

  }

  public add_collection(pro_name:string) {
    console.log("add collection");
    var collection_id = this.uuid.generate();
    this.auth.user.subscribe(u => {
      if(u) {
        this.db.add_collection(u.uid, collection_id, pro_name);
        this.router.navigate(["/"]);
      }
    });
    

  }
}
