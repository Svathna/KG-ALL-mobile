import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { UserSafeResponse } from './models/user.model';
import { CompanyService } from './services/company.service';
import { TranslateService } from '@ngx-translate/core';

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
    private translate: TranslateService,
  ) {
    //*** Control SplashScreen
    this.splashScreen.show();
    this.initializeApp();
    this.fetData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#3069bb');
      //*** Set default languge
      this.translate.setDefaultLang('kh');
      //*** Control SplashScreen
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
