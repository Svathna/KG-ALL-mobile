import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePricingPageRoutingModule } from './service-pricing-routing.module';

import { ServicePricingPage } from './service-pricing.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicePricingPageRoutingModule,
        TranslateModule.forChild(),
    ],
    declarations: [ServicePricingPage],
})
export class ServicePricingPageModule {}
