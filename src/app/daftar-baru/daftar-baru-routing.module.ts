import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarBaruPage } from './daftar-baru.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarBaruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarBaruPageRoutingModule {}
