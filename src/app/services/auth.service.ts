import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
import { AlertService } from './alerts.service';

export interface LoginResponse {
  token: string,
  user: User,
  success: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public user: User;
  public showLoader: boolean = false;

  constructor(
    public router: Router,
    private http: HttpClient,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void { }

  //sign in function
  signIn(email, password) {
    return new Promise((resolve, reject) => {
      try {
        this.http.post(environment.apiURL + '/user/login', {
          email,
          password,
        })
        .subscribe(async ( response: LoginResponse) => {
          const { token, user } = response;
          if (user) {
            // OH YEAH! logged in successfuly
            this.userData = new User(user);
            localStorage.setItem('user', JSON.stringify(this.userData));
            localStorage.setItem('token', token);
            // got to the main page
            this.router.navigate(['worksites']);

            resolve(true);
          } else {
            localStorage.setItem('user', null);
            localStorage.setItem('token', null);
            await this.alertService.error('No user found');
            reject('No user found');
          }
        }, async () => {
          await this.alertService.error('Wrong credentials, please try again');
          reject('Error, logging in');
        });
      } catch (err) {
        this.alertService.error(err);
        reject(err);
      }
    });
  }

  // Sign out
  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/app/login']);
  }

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    return (token != null) ? true : false;
  }
}
