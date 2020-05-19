import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: "", redirectTo: "menu", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: "menu",
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule),
    canActivate: [AuthGuard]
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
