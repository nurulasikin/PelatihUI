import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LejerPage } from './lejer.page';

const routes: Routes = [
  {
    path: '',
    component: LejerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LejerPageRoutingModule {}
