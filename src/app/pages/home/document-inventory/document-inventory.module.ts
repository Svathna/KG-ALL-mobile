import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentInventoryPageRoutingModule } from './document-inventory-routing.module';

import { DocumentInventoryPage } from './document-inventory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DocumentInventoryPageRoutingModule
  ],
  declarations: [DocumentInventoryPage]
})
export class DocumentInventoryPageModule {}
