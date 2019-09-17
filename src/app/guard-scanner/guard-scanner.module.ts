import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuardScannerPage } from './guard-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: GuardScannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuardScannerPage]
})
export class GuardScannerPageModule {}
