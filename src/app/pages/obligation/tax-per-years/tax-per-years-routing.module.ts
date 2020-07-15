import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxPerYearsPage } from './tax-per-years.page';

const routes: Routes = [
  {
    path: '',
    component: TaxPerYearsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxPerYearsPageRoutingModule {}
