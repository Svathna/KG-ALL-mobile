import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxCalculationPageRoutingModule } from './tax-calculation-routing.module';

import { TaxCalculationPage } from './tax-calculation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxCalculationPageRoutingModule
  ],
  declarations: [TaxCalculationPage]
})
export class TaxCalculationPageModule {}
