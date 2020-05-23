import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
    {
        path: "",
		component: HomePage,
		children: [
			{
			  path: 'general',
			  loadChildren: () => import('../general/general.module').then(m => m.GeneralPageModule),
			}
		  ]
    },
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [HomePage],
})
export class HomePageModule {}
