import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MocPage } from './moc.page';

const routes: Routes = [
  {
    path: '',
    component: MocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MocPageRoutingModule {}
