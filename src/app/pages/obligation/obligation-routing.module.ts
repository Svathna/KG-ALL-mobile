import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObligationPage } from './obligation.page';

const routes: Routes = [
  {
    path: 'tap',
    component: ObligationPage,
    children: [
			{
				path: 'tax-per-months',
        loadChildren: () => import('./tax-per-months/tax-per-months.module').then( m => m.TaxPerMonthsPageModule)
      },
      {
        path: 'tax-per-years',
        loadChildren: () => import('./tax-per-years/tax-per-years.module').then( m => m.TaxPerYearsPageModule)
      },
		]
  },
  {
		path: '',
		redirectTo: 'tap/tax-per-months',
		pathMatch: 'full'
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObligationPageRoutingModule {}
