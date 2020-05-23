import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user.model";
import { NavController } from '@ionic/angular';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    user: User;
    pageGroup = [
        {
            name: "General",
            url: 'home/general'
        },
        {
            name: "Oblication"
        },
        {
            name: "Tax Calucation"
        },
        {
            name: "Service"
        }
    ];

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
        this.user = this.authService.getUserSafe();
        console.log(this.user);
    }

    goToOtherPage(page) {
        console.log("implement me!");
        this.navCtrl.navigateForward(page.url)
    }

    logout() {
        this.authService.signOut();
    }
}
