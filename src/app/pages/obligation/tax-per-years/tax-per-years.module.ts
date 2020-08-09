import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPerYearsPageRoutingModule } from './tax-per-years-routing.module';

import { TaxPerYearsPage } from './tax-per-years.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    TaxPerYearsPageRoutingModule
  ],
  declarations: [TaxPerYearsPage]
})
export class TaxPerYearsPageModule {}
