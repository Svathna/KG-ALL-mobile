import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MocPageRoutingModule } from './moc-routing.module';

import { MocPage } from './moc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MocPageRoutingModule
  ],
  declarations: [MocPage]
})
export class MocPageModule {}
