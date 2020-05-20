import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    user: any;
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
        this.authService.getUserSafe().subscribe((data: any) => {
            if (data.success) {
                this.user = data.user;
            }
            console.log(this.user);
        });
    }

    goToOtherPage(event) {
        console.log("implement me!");
    }

    logout() {
        this.authService.signOut();
    }
}
