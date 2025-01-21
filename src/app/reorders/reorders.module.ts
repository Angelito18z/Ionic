import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReordersPageRoutingModule } from './reorders-routing.module';

import { ReordersPage } from './reorders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReordersPageRoutingModule
  ],
  declarations: [ReordersPage]
})
export class ReordersPageModule {}
