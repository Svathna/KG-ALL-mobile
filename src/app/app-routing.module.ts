import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "login",
        loadChildren: () =>
            import("./pages/login/login.module").then((m) => m.LoginPageModule),
        canActivate: [LoginGuard],
    },
    {
        path: "home",
        loadChildren: () =>
            import("./pages/home/home.module").then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'obligation',
        loadChildren: () => import('./pages/obligation/obligation.module').then( m => m.ObligationPageModule)
    },
    {
        path: 'general',
        loadChildren: () => import('./pages/general/general.module').then(m => m.GeneralPageModule),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
