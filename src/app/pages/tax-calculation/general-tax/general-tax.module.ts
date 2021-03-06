import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralTaxPageRoutingModule } from './general-tax-routing.module';

import { GeneralTaxPage } from './general-tax.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    IonicModule,
    GeneralTaxPageRoutingModule
  ],
  declarations: [GeneralTaxPage]
})
export class GeneralTaxPageModule {}
