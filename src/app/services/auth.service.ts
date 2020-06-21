import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { User, UserType } from "src/app/models/user.model";
import { AlertService } from "./alerts.service";
import { NavController } from '@ionic/angular';
import { CompanyDetail } from '../models/company.model';

export interface LoginResponse {
    token: string;
    user: User;
    company: CompanyDetail;
    success: boolean;
}

@Injectable({
    providedIn: "root",
})
export class AuthService implements OnInit {
    public userData: User;
    public company: CompanyDetail
    public showLoader: boolean = false;

    constructor(
        private navCtr: NavController,
        private http: HttpClient,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {}

    //sign in function
    signIn(userName, password) {
        return new Promise((resolve, reject) => {
            try {
                this.http
                    .post(environment.apiURL + "/user/login", {
                        userName,
                        password,
                    })
                    .subscribe(
                        async (response: LoginResponse) => {
                            const { token, user, company } = response;
                            if (user && user.type === UserType.NORMAL_USER) {
                                // OH YEAH! logged in successfuly
                                this.userData = user;
                                this.company = company;
                                console.log(response);
                                console.log(this.userData);
                                console.log(this.company);
                                localStorage.setItem(
                                    "user",
                                    JSON.stringify(this.userData)
                                );
                                localStorage.setItem(
                                    "company",
                                    JSON.stringify(this.userData)
                                );
                                localStorage.setItem("token", token);
                                // got to the main page
                                this.navCtr.navigateRoot("home");

                                resolve(true);
                            } else {
                                localStorage.setItem("user", null);
                                localStorage.setItem("token", null);
                                await this.alertService.error("No user found");
                                reject("No user found");
                            }
                        },
                        async () => {
                            await this.alertService.error(
                                "Wrong credentials, please try again"
                            );
                            reject("Error, logging in");
                        }
                    );
            } catch (err) {
                this.alertService.error(err);
                reject(err);
            }
        });
    }

    // Sign out
    signOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.navCtr.navigateBack("login");
    }

    get isLoggedIn(): boolean {
        const token = JSON.parse(localStorage.getItem("token"));
        return token != null ? true : false;
    }

    getUserSafe() {
        // const user: User = JSON.parse(localStorage.getItem("user"));
        // return user ? user : null;
        // TODO: check this later
        return this.http.get(environment.apiURL + "/user/current/safe");
    }
}
