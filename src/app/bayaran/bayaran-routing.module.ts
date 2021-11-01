import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BayaranPage } from './bayaran.page';

const routes: Routes = [
  {
    path: '',
    component: BayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BayaranPageRoutingModule {}
