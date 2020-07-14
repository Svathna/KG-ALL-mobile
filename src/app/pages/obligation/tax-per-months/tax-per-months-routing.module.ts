import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxPerMonthsPage } from './tax-per-months.page';

const routes: Routes = [
  {
    path: '',
    component: TaxPerMonthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxPerMonthsPageRoutingModule {}
