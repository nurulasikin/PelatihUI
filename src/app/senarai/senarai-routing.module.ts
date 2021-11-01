import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SenaraiPage } from './senarai.page';

const routes: Routes = [
  {
    path: '',
    component: SenaraiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenaraiPageRoutingModule {}
