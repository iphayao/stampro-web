import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebasedbService {

  root: string = 'users';
  collection: string = 'stamp_collection';
  stamp: string = 'stamps';
  constructor(public db: AngularFireDatabase) { }

  public QueryStampCollection(uid: string): FirebaseListObservable<any[]> {
    return this.db.list(`/${this.root}/${uid}/${this.collection}`);
  }

  public query_stamps(uid: string, cid: string): FirebaseListObservable<any[]> {
    return this.db.list(`/${this.root}/${uid}/${this.collection}/${cid}/${this.stamp}`);
  }

  public update_stamps(uid: string, cid: string, stamp_key: string, stamp_value: string) {
    this.db.object(`/${this.root}/${uid}/${this.collection}/${cid}/${this.stamp}/${stamp_key}`).set(stamp_value);
  }

  public push_stamps(uid: string, cid: string, stamp_id: string) {
    var item = this.db.list(`/${this.root}/${uid}/${this.collection}/${cid}/${this.stamp}`);
    var stemps;
    item.update("sxxx", "xxxx");
    // item.map(({name, key}) => ({name: "xxx", key})).subscribe(x => console.log(x))
    // item.subscribe(
    //   x => {
    //     console.log(x.keys);
    //   }
    // );
  }

  // public create_new_stamps(uid: string, cid: string) {
  //   var items = this.db.list(`/${this.root}/${uid}/${this.collection}/${cid}/${this.stamp}`);
  //   for(var i = 0; i < 8; i++) {
  //     items.push()
  //   }
  // }

}
