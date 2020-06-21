import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentInventoryPage } from './document-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentInventoryPageRoutingModule {}
