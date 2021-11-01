import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KemaskinikatalaluanPageRoutingModule } from './kemaskinikatalaluan-routing.module';

import { KemaskinikatalaluanPage } from './kemaskinikatalaluan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KemaskinikatalaluanPageRoutingModule
  ],
  declarations: [KemaskinikatalaluanPage]
})
export class KemaskinikatalaluanPageModule {}
