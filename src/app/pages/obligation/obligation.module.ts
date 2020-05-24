import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObligationPageRoutingModule } from './obligation-routing.module';

import { ObligationPage } from './obligation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObligationPageRoutingModule
  ],
  declarations: [ObligationPage]
})
export class ObligationPageModule {}
