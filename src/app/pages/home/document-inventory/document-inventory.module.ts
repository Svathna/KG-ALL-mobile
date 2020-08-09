import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentInventoryPageRoutingModule } from './document-inventory-routing.module';

import { DocumentInventoryPage } from './document-inventory.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    IonicModule,
    DocumentInventoryPageRoutingModule
  ],
  declarations: [DocumentInventoryPage]
})
export class DocumentInventoryPageModule {}
