import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'worksites',
    loadChildren: './worksites/worksites.module#WorksitesPageModule',
    canActivate: [AdminGuard],
  },
  {
    path: 'worksites/:worksiteId',
    loadChildren: './worksites/worksite/worksite.module#WorksitePageModule',
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
