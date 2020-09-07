import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicePricingService } from 'src/app/services/service-pricing.service';
import { ServicePricing } from 'src/app/models/service-pricing.model';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
    selector: 'app-service-pricing',
    templateUrl: './service-pricing.page.html',
    styleUrls: ['./service-pricing.page.scss'],
})
export class ServicePricingPage implements OnInit {
    isFetching = false;
    servicePricing: ServicePricing;

    constructor(
        private navCtl: NavController,
        private pricingService: ServicePricingService,
        private helpersService: HelpersService,
    ) {}

    ngOnInit() {
        this.fetchServicePricing();
    }

    fetchServicePricing() {
        this.isFetching = true;
        this.pricingService.getServicePricing().subscribe((data: any) => {
            this.isFetching = false;
            if (data && data.success && data.service) {
                this.servicePricing = data.service;
            }
        });
    }

    onClickdownload(url: string) {
        if (!url) {
            return;
        }
        this.helpersService.getPermissionAndDownloadPdf(url, 'Service_Pricing_Detail');
    }

    backHome() {
        this.navCtl.navigateBack('home');
    }
}
