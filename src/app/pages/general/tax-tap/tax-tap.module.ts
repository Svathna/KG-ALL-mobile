import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxTapPageRoutingModule } from './tax-tap-routing.module';

import { TaxTapPage } from './tax-tap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxTapPageRoutingModule
  ],
  declarations: [TaxTapPage]
})
export class TaxTapPageModule {}
