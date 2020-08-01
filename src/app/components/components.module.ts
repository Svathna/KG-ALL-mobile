import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { ChoseLanguageComponent } from './chose-language/chose-language.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    ChoseLanguageComponent,
  ],
  exports: [
    ChoseLanguageComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule.forChild(),
  ]
})
export class ComponentsModule {}
