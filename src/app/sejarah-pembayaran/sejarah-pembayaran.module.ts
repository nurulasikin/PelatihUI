import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SejarahPembayaranPageRoutingModule } from './sejarah-pembayaran-routing.module';

import { SejarahPembayaranPage } from './sejarah-pembayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SejarahPembayaranPageRoutingModule
  ],
  declarations: [SejarahPembayaranPage]
})
export class SejarahPembayaranPageModule {}
