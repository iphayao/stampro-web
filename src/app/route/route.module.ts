import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../list/list.component';

const appRoute: Routes = [
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RouteModule { }
