import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KalkulatorPembiayaanPage } from './kalkulator-pembiayaan.page';

const routes: Routes = [
  {
    path: '',
    component: KalkulatorPembiayaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalkulatorPembiayaanPageRoutingModule {}
