import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsPagePage } from './requests-page.page';

const routes: Routes = [
  {
    path: '',
    component: RequestsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsPagePageRoutingModule {}
