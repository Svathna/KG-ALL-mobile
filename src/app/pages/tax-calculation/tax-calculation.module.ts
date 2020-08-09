import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxCalculationPageRoutingModule } from './tax-calculation-routing.module';

import { TaxCalculationPage } from './tax-calculation.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    IonicModule,
    TaxCalculationPageRoutingModule
  ],
  declarations: [TaxCalculationPage]
})
export class TaxCalculationPageModule {}
