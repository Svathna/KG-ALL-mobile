import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryTaxPage } from './salary-tax.page';

const routes: Routes = [
  {
    path: '',
    component: SalaryTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalaryTaxPageRoutingModule {}
