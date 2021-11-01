import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SenaraiPageRoutingModule } from './senarai-routing.module';

import { SenaraiPage } from './senarai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SenaraiPageRoutingModule
  ],
  declarations: [SenaraiPage]
})
export class SenaraiPageModule {}
