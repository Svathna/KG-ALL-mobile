import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { PopoverController } from '@ionic/angular';
import { ChoseLanguageComponent } from 'src/app/components/chose-language/chose-language.component';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

const PASSWORD_INPUT = {
    type: "password",
    showHideIcon: "eye-off",
};

@Component({
    selector: "login",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
    public newUser = false;
    public loginForm: FormGroup;
    public formErrors = {
        email: "",
        password: "",
    };
    public errorMessage: any;
    passwordShowHide = PASSWORD_INPUT;
    isFetching = false;
    langIconSrc = "assets/logo/kh-icon.png";

    constructor(
        public authService: AuthService,
        private fb: FormBuilder,
        public popoverCtrl: PopoverController,
        private translate: TranslateService,
    ) {
        this.setLangIco();
        this.loginForm = this.fb.group({
            userName: ["", [Validators.required]],
            password: ["", Validators.required],
        });
    }

    ngOnInit() {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setLangIco();
        })
    }

    setLangIco() {
        // control lang-icon
        if (
            localStorage.getItem("locale") &&
            localStorage.getItem("locale") == "null"
        ) {
            this.langIconSrc = "assets/logo/kh-icon.png";
        } else if (
            localStorage.getItem("locale") &&
            localStorage.getItem("locale") != "null"
        ) {
            this.langIconSrc = `assets/logo/${localStorage.getItem(
                "locale"
            )}-icon.png`;
        } else {
            this.langIconSrc = "assets/logo/kh-icon.png";
        }
    }

    login() {
        if (this.loginForm.valid) {
            this.isFetching = true;
            this.authService
                .signIn(
                    this.loginForm.value["userName"],
                    this.loginForm.value["password"]
                )
                .finally(() => {
                    this.isFetching = false;
                });
        }
    }

    showHidePassword() {
        this.passwordShowHide.type =
            this.passwordShowHide.type === "password" ? "text" : "password";
        this.passwordShowHide.showHideIcon =
            this.passwordShowHide.showHideIcon === "eye-off"
                ? "eye"
                : "eye-off";
    }

    async changeLanguage() {
        const popover = await this.popoverCtrl.create({
            component: ChoseLanguageComponent,
            // cssClass: 'my-custom-class',
            // translucent: true,
            componentProps: {
                currentLang: this.translate.currentLang,
            }
          });
          return await popover.present();
    }
}
