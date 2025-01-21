import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReordersPage } from './reorders.page';

const routes: Routes = [
  {
    path: '',
    component: ReordersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReordersPageRoutingModule {}
