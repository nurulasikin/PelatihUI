import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatuspermohonanpembiayaanPage } from './statuspermohonanpembiayaan.page';

const routes: Routes = [
  {
    path: '',
    component: StatuspermohonanpembiayaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatuspermohonanpembiayaanPageRoutingModule {}
