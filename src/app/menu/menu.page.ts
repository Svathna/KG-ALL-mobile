import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.page.html",
    styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
    activePath = "";

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
        console.log("kkk");
    }

    logout() {
        this.authService.signOut();
    }
}
