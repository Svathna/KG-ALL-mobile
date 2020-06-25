import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxCalculationPage } from './tax-calculation.page';

const routes: Routes = [
  {
    path: '',
    component: TaxCalculationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxCalculationPageRoutingModule {}
