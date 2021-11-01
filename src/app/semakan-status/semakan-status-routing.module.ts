import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemakanStatusPage } from './semakan-status.page';

const routes: Routes = [
  {
    path: '',
    component: SemakanStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemakanStatusPageRoutingModule {}
