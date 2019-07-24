import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public newUser = false;
  public user: firebase.User;
  public loginForm: FormGroup;
  public formErrors: FormErrors = {
    'email': '',
    'password': '',
  };
  public errorMessage: any;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: ['jw@justworks.com', [Validators.required, Validators.email]],
      password: ['adminadmin', Validators.required]
    });
  }

  login() {
    this.authService.SignIn(
      this.loginForm.value['email'],
      this.loginForm.value['password'],
    );
  }

}
