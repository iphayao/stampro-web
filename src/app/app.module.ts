import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
//import { firebase } from 'firebase/app';

import { AppComponent, AppDialog } from './app.component';

import 'hammerjs';

export const firebaseConfig = {
    apiKey: "AIzaSyBFPr0oGKWjlu_xfV2pJAHwlU1ixLaKHDk",
    authDomain: "stampro-6f860.firebaseapp.com",
    databaseURL: "https://stampro-6f860.firebaseio.com",
    projectId: "stampro-6f860",
    storageBucket: "stampro-6f860.appspot.com",
    messagingSenderId: "771235130895"
};

@NgModule({
  declarations: [
    AppComponent,
    AppDialog,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  entryComponents: [AppDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
