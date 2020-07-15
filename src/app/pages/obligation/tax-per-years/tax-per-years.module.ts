import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPerYearsPageRoutingModule } from './tax-per-years-routing.module';

import { TaxPerYearsPage } from './tax-per-years.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxPerYearsPageRoutingModule
  ],
  declarations: [TaxPerYearsPage]
})
export class TaxPerYearsPageModule {}
