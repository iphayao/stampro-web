import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebasedbService {

  root: string = 'users';
  collection: string = 'stamp_collection';
  constructor(public db: AngularFireDatabase) { }

  public QueryStampCollection(uid: string): FirebaseListObservable<any[]> {
    return this.db.list(`/${this.root}/${uid}/${this.collection}`);
  }

  public QueryStamps(uid: string, cid: string): FirebaseListObservable<any[]> {
    return this.db.list(`/${this.root}/${uid}/${this.collection}/${cid}`);
  }

}
