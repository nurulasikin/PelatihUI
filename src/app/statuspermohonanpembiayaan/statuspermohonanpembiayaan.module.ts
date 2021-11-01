import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatuspermohonanpembiayaanPageRoutingModule } from './statuspermohonanpembiayaan-routing.module';

import { StatuspermohonanpembiayaanPage } from './statuspermohonanpembiayaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatuspermohonanpembiayaanPageRoutingModule
  ],
  declarations: [StatuspermohonanpembiayaanPage]
})
export class StatuspermohonanpembiayaanPageModule {}
