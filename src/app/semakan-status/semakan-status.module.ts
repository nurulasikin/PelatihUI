import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemakanStatusPageRoutingModule } from './semakan-status-routing.module';

import { SemakanStatusPage } from './semakan-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemakanStatusPageRoutingModule
  ],
  declarations: [SemakanStatusPage]
})
export class SemakanStatusPageModule {}
