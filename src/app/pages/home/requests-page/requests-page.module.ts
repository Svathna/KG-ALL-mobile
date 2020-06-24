import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsPagePageRoutingModule } from './requests-page-routing.module';

import { RequestsPagePage } from './requests-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsPagePageRoutingModule
  ],
  declarations: [RequestsPagePage]
})
export class RequestsPagePageModule {}
