import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

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
            url: 'general'
        },
        {
            name: "Oblication",
            url: "obligation"
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
            console.log(event);
        });
    }

    ngOnInit() {
        this.user = this.authService.getUserSafe();
        console.log(this.user);
    }

    goToOtherPage() {
        console.log("implement me!");
        // this.navCtrl.navigateForward(page.url)
    }

    logout() {
        this.authService.signOut();
    }
}
