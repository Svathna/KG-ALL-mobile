import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';
import { User, UserSafeResponse } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyDetail } from 'src/app/models/company.model';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    user: User;
    company: CompanyDetail;

    // pageGroup = [
    //     {
    //         name: "General",
    //         url: 'general',
    //         icon: 'briefcase'
    //     },
    //     {
    //         name: "Oblication",
    //         url: "obligation",
    //         icon: 'list'
    //     },
    //     {
    //         name: "Tax Calucation",
    //         icon: 'calculator'
    //     },
    //     {
    //         name: "Service",
    //         icon: 'cash'
    //     }
    // ];

    pages = [
        {
            name: "Request",
            // path: '/menu/home'
        },
        {
            name: "Document Inventory",
        },
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
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
                console.log(this.user);
                console.log(this.company);
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
