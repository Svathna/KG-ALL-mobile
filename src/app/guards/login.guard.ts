import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: "root",
})
export class LoginGuard implements CanActivate {
    constructor(public navCtr: NavController) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        // Guard for user is logged in or not
        let token = localStorage.getItem("token");

        if (token) {
            this.navCtr.navigateRoot(["home"]);
            return false;
        }
        return true;
    }
}
