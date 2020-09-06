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
    {
        path: 'document-inventory',
        loadChildren: () => import('./pages/home/document-inventory/document-inventory.module').then( m => m.DocumentInventoryPageModule)
    },
    {
        path: 'requests-page',
        loadChildren: () => import('./pages/home/requests-page/requests-page.module').then( m => m.RequestsPagePageModule)
    },
    {
        path: 'tax-calculation',
        loadChildren: () => import('./pages/tax-calculation/tax-calculation.module').then( m => m.TaxCalculationPageModule)
    },
    {
        path: 'general-tax',
        loadChildren: () => import('./pages/tax-calculation/general-tax/general-tax.module').then( m => m.GeneralTaxPageModule)
    },
    {
        path: 'salary-tax',
        loadChildren: () => import('./pages/tax-calculation/salary-tax/salary-tax.module').then( m => m.SalaryTaxPageModule)
    },
    {
        path: 'service-pricing',
        loadChildren: () => import('./pages/service-pricing/service-pricing.module').then( m => m.ServicePricingPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
