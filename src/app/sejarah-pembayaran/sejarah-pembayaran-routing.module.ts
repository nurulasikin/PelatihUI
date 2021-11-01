import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SejarahPembayaranPage } from './sejarah-pembayaran.page';

const routes: Routes = [
  {
    path: '',
    component: SejarahPembayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SejarahPembayaranPageRoutingModule {}
