import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPerMonthsPageRoutingModule } from './tax-per-months-routing.module';

import { TaxPerMonthsPage } from './tax-per-months.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    TaxPerMonthsPageRoutingModule
  ],
  declarations: [TaxPerMonthsPage]
})
export class TaxPerMonthsPageModule {}
