import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { UserSafeResponse } from './models/user.model';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private companyService: CompanyService,
  ) {
    this.splashScreen.show();
    this.initializeApp();
    this.fetData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  fetData() {
    this.authService.getUserSafe().subscribe((data: UserSafeResponse) => {
      if (data && data.success) {
        const { company } = data;
        this.companyService.setCompanyToLocal(company);
      }
    });
  }
}
