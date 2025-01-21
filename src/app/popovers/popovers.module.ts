import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoversPageRoutingModule } from './popovers-routing.module';

import { PopoversPage } from './popovers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoversPageRoutingModule
  ],
  declarations: [PopoversPage]
})
export class PopoversPageModule {}
