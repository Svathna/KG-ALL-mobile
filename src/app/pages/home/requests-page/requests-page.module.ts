import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsPagePageRoutingModule } from './requests-page-routing.module';

import { RequestsPagePage } from './requests-page.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    RequestsPagePageRoutingModule
  ],
  declarations: [RequestsPagePage]
})
export class RequestsPagePageModule {}
