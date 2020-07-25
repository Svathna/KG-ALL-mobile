import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxCalculationPage } from './tax-calculation.page';

const routes: Routes = [
  {
    path: '',
    component: TaxCalculationPage,
    // children: [
    //   {
    //     path: 'general-tax',
    //     loadChildren: () => import('./general-tax/general-tax.module').then( m => m.GeneralTaxPageModule)
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxCalculationPageRoutingModule {}
