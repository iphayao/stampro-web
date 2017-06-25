import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UidService } from './providers/uid.service';
import { FirebasedbService } from './providers/firebasedb.service';
import { AuthService } from './providers/auth.service';
//import * as firebase from 'firebase/app';
//import { firebase } from 'firebase/app';

import { AppComponent, AppDialog } from './app.component';

import 'hammerjs';

import { ListComponent } from './list/list.component';
import { CollectionComponent } from './collection/collection.component'
import { PageNotFoundComponent } from './not-found.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: ListComponent },
  { path: 'collection/:id', component: CollectionComponent },
  { path: '**', component: PageNotFoundComponent }
];

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
    ListComponent,
    CollectionComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [AppDialog],
  providers: [
    UidService, 
    FirebasedbService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
