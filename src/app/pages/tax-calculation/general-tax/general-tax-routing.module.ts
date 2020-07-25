import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralTaxPage } from './general-tax.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralTaxPageRoutingModule {}
