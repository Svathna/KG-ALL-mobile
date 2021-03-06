import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryTaxPageRoutingModule } from './salary-tax-routing.module';

import { SalaryTaxPage } from './salary-tax.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    IonicModule,
    SalaryTaxPageRoutingModule,
  ],
  declarations: [SalaryTaxPage],
})
export class SalaryTaxPageModule {}
