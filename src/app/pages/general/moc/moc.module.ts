import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { MocPageRoutingModule } from './moc-routing.module';

import { MocPage } from './moc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    IonicModule,
    MocPageRoutingModule
  ],
  declarations: [MocPage]
})
export class MocPageModule {}
