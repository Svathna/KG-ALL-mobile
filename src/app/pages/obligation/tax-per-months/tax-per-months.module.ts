import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPerMonthsPageRoutingModule } from './tax-per-months-routing.module';

import { TaxPerMonthsPage } from './tax-per-months.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxPerMonthsPageRoutingModule
  ],
  declarations: [TaxPerMonthsPage]
})
export class TaxPerMonthsPageModule {}
