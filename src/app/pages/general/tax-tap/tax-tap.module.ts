import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicModule } from '@ionic/angular';

import { TaxTapPageRoutingModule } from './tax-tap-routing.module';

import { TaxTapPage } from './tax-tap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PdfViewerModule,
    IonicModule,
    TaxTapPageRoutingModule
  ],
  declarations: [TaxTapPage]
})
export class TaxTapPageModule {}
