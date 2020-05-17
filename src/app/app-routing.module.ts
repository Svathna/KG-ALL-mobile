import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./guards/admin.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AdminGuard]
  },
  // {
  //   path: "worksites",
  //   loadChildren: () => import('./worksites/worksites.module').then(m => m.WorksitesPageModule),
  //   canActivate: [AdminGuard]
  // },
  // {
  //   path: "reports/create-reports",
  //   component: CreateReportsComponent
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
