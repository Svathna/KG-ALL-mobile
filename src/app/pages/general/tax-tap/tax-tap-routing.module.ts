import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxTapPage } from './tax-tap.page';

const routes: Routes = [
  {
    path: '',
    component: TaxTapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxTapPageRoutingModule {}
