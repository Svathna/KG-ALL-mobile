import { Component } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

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

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userName: ["", [Validators.required]],
      password: ["", Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.signIn(
        this.loginForm.value["userName"],
        this.loginForm.value["password"]
      );
    }
  }
}
