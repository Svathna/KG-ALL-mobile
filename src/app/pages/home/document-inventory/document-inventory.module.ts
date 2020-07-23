import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DocumentInventoryPageRoutingModule } from './document-inventory-routing.module';

import { DocumentInventoryPage } from './document-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DocumentInventoryPageRoutingModule
  ],
  declarations: [DocumentInventoryPage]
})
export class DocumentInventoryPageModule {}
