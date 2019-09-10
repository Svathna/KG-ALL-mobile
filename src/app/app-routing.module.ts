import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "./guards/admin.guard";
import { LoginGuard } from "./guards/login.guard";
import { WorkerDetailsComponent } from "./workers/worker-details/worker-details.component";
import { CreateReportsComponent } from "./reports/create-reports/create-reports.component";

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
    loadChildren: "./workers/workers.module#WorkersPageModule",
    canActivate: [AdminGuard]
  },
  {
    path: "reports",
    loadChildren: "./reports/reports.module#ReportsPageModule",
    canActivate: [AdminGuard]
  },
  {
    path: "workers/:workerId",
    component: WorkerDetailsComponent
  },
  {
    path: "reports/create-reports",
    component: CreateReportsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
