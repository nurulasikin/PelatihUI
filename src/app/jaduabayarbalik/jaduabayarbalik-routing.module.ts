import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaduabayarbalikPage } from './jaduabayarbalik.page';

const routes: Routes = [
  {
    path: '',
    component: JaduabayarbalikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaduabayarbalikPageRoutingModule {}
