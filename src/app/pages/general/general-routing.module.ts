import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralPage } from './general.page';

const routes: Routes = [
  {
    path: 'taps',
    component: GeneralPage,
    children: [
			{
				path: 'moc',
				children: [
					{
						path: '',
						loadChildren: () => import('./moc/moc.module').then( m => m.MocPageModule)
						// loadChildren: '../tab1/tab1.module#Tab1PageModule'
					}
				]
			},
		]
	},
	{
		path: '',
		redirectTo: 'taps/moc',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralPageRoutingModule {}
