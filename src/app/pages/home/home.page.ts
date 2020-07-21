import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyDetail } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    company: CompanyDetail;

    pages = [
        {
            name: "បញ្ជីពាក្យស្នើរ",
            path: '/requests-page',
        },
        {
            name: "ទូឯកសារ",
            path: '/document-inventory',
        },
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
        private companyService: CompanyService,
        public navCtrl: NavController,
        private callNumber: CallNumber,
    ) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.activePath = event.url;
        });
    }

    ngOnInit() {
        this.company = this.companyService.getCompanyLocal();
    }

    goToPageGeneral() {
        this.navCtrl.navigateForward("general");
    }

    goToPageObligation() {
        this.navCtrl.navigateForward("obligation");
    }

    goToPageTaxCalculation() {
        this.navCtrl.navigateForward("tax-calculation");
    }

    contactUs() {
        this.callNumber.callNumber("098381832", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

    logout() {
        this.authService.signOut();
    }
}
