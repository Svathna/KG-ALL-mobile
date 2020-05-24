import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObligationPage } from './obligation.page';

const routes: Routes = [
  {
    path: '',
    component: ObligationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObligationPageRoutingModule {}
