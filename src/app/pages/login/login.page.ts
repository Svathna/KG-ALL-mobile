import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

const PASSWORD_INPUT = {
  type: "password",
  showHideIcon: "eye-off"
}

@Component({
  selector: "login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage {
  public newUser = false;
  public loginForm: FormGroup;
  public formErrors = {
    email: "",
    password: ""
  };
  public errorMessage: any;
  passwordShowHide = PASSWORD_INPUT;
  isFetching = false;

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isFetching = true;
      this.authService.signIn(
        this.loginForm.value["userName"],
        this.loginForm.value["password"]
      ).finally(() => {
        this.isFetching = false;
      });
    }
  }

  showHidePassword() {
    this.passwordShowHide.type = this.passwordShowHide.type === "password" ? "text" : "password";
    this.passwordShowHide.showHideIcon = this.passwordShowHide.showHideIcon === "eye-off"? "eye" : "eye-off"; 
  }
}
