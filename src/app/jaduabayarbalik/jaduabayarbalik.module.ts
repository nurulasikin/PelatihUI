import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaduabayarbalikPageRoutingModule } from './jaduabayarbalik-routing.module';

import { JaduabayarbalikPage } from './jaduabayarbalik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaduabayarbalikPageRoutingModule
  ],
  declarations: [JaduabayarbalikPage]
})
export class JaduabayarbalikPageModule {}
