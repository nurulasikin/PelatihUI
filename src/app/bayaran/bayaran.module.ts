import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BayaranPageRoutingModule } from './bayaran-routing.module';

import { BayaranPage } from './bayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BayaranPageRoutingModule
  ],
  declarations: [BayaranPage]
})
export class BayaranPageModule {}


