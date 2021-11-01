import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LejerPageRoutingModule } from './lejer-routing.module';

import { LejerPage } from './lejer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LejerPageRoutingModule
  ],
  declarations: [LejerPage]
})
export class LejerPageModule {}
