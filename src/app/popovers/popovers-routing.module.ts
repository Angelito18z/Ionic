import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoversPage } from './popovers.page';

const routes: Routes = [
  {
    path: '',
    component: PopoversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoversPageRoutingModule {}
