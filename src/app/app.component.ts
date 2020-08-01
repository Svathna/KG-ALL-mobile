import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { UserSafeResponse } from './models/user.model';
import { CompanyService } from './services/company.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
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

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.use(event.lang);
      localStorage.setItem('locale', event.lang);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#3069bb');
      //*** Set default languge
      this.translate.setDefaultLang('kh');
      if (localStorage.getItem('locale') && localStorage.getItem('locale') == 'null') {
        localStorage.setItem('locale','kh');
        this.translate.use("kh");
      } else if (localStorage.getItem('locale') && localStorage.getItem('locale') != 'null') {
        this.translate.use(localStorage.getItem('locale'));
      } else {
        this.translate.use("kh");
      }
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
