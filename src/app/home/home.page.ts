import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../models/user.model";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    user: User;
    btnGroup = ["General", "Oblication", "Tax Calucation", "Service"];

    pages = [
        {
            name: "Request",
            // path: '/menu/home'
        },
        {
            name: "Document Inventory",
        },
    ];

    constructor(private router: Router, private authService: AuthService) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.activePath = event.url;
        });
    }

    ngOnInit() {
        this.user = this.authService.getUserSafe();
    }

    goToOtherPage(event) {
        console.log("implement me!");
    }

    logout() {
        this.authService.signOut();
    }
}
