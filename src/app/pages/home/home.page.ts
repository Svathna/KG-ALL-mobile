import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';
import { User, UserSafeResponse } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyDetail } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    user: User;
    company: CompanyDetail;

    pages = [
        {
            name: "My Requests",
            path: '/requests-page'
        },
        {
            name: "Document Inventory",
            path: '/document-inventory',
        },
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
        private companyService: CompanyService,
        public navCtrl: NavController,
    ) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.activePath = event.url;
        });
    }

    ngOnInit() {
        this.authService.getUserSafe().subscribe((data: UserSafeResponse) => {
            if (data && data.success) {
                this.user = data.user;
                this.company = data.company;
                this.companyService.setCompanyToLocal(this.company);
            }
        });
    }

    goToPageGeneral() {
        this.navCtrl.navigateForward("general");
    }

    goToPageObligation() {
        this.navCtrl.navigateForward("obligation");
    }

    logout() {
        this.authService.signOut();
    }
}
