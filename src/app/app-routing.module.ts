import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./guards/admin.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginPageModule",
    canActivate: [LoginGuard]
  },
  {
    path: "worksites",
    loadChildren: "./worksites/worksites.module#WorksitesPageModule",
    canActivate: [AdminGuard]
  },
  {
    path: "workers",
    loadChildren: "./workers/workers.module#WorkersPageModule"
  },
  {
    path: "reports",
    loadChildren: "./reports/reports.module#ReportsPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
