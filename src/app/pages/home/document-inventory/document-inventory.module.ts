import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentInventoryPageRoutingModule } from './document-inventory-routing.module';

import { DocumentInventoryPage } from './document-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentInventoryPageRoutingModule
  ],
  declarations: [DocumentInventoryPage]
})
export class DocumentInventoryPageModule {}
