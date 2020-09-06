import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-service-pricing',
    templateUrl: './service-pricing.page.html',
    styleUrls: ['./service-pricing.page.scss'],
})
export class ServicePricingPage implements OnInit {
    constructor(private navCtl: NavController) {}

    ngOnInit() {}

    backHome() {
        this.navCtl.navigateBack('home');
    }
}
