import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObligationPage } from './obligation.page';

const routes: Routes = [
  {
    path: '',
    component: ObligationPage
  },
  // {
  //   path: 'tax-per-months',
  //   loadChildren: () => import('./tax-per-months/tax-per-months.module').then( m => m.TaxPerMonthsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObligationPageRoutingModule {}
