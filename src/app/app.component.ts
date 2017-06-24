import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Stampro';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  constructor(public db: AngularFireDatabase, public af: AngularFireAuth, public dlg: MdDialog) {
    this.items = db.list('/items');
    this.user = af.authState;
  }

  openDialog() {
    this.dlg.open(AppDialog)
  }
}

@Component({
  templateUrl: './app.component.dialog.html',
})

export class AppDialog {}
