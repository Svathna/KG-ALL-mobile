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
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: "worksites",
    loadChildren: () => import('./worksites/worksites.module').then(m => m.WorksitesPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: "workers",
    loadChildren: () => import('./workers/workers.module').then(m => m.WorkersPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: "reports",
    loadChildren: () => import('./reports/reports.module').then(m => m.ReportsPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: "workers/:workerId",
    component: WorkerDetailsComponent
  },
  {
    path: "reports/create-reports",
    component: CreateReportsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
