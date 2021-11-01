import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarBaruPageRoutingModule } from './daftar-baru-routing.module';

import { DaftarBaruPage } from './daftar-baru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarBaruPageRoutingModule
  ],
  declarations: [DaftarBaruPage]
})
export class DaftarBaruPageModule {}
