import { Component } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { NavController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { CompanyDetail } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ChoseLanguageComponent } from 'src/app/components/chose-language/chose-language.component';

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"],
})
export class HomePage {
    activePath = "";
    company: CompanyDetail;
    langIconSrc = "assets/logo/kh-icon.png";

    pages = [
        {
            name: "បញ្ជីពាក្យស្នើរ",
            path: '/requests-page',
            icon: 'list-outline',
        },
        {
            name: "ទូឯកសារ",
            path: '/document-inventory',
            icon: 'albums-outline',
        },
        {
            name: 'ទាក់ទង​មក​ពួក​យើង',
            icon: 'call-outline',
        }
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
        private companyService: CompanyService,
        public navCtrl: NavController,
        private callNumber: CallNumber,
        private translate: TranslateService,
        public popoverCtrl: PopoverController,
    ) {
        this.router.events.subscribe((event: RouterEvent) => {
            this.activePath = event.url;
        });
        this.setLangIco();
    }

    ngOnInit() {
        this.company = this.companyService.getCompanyLocal();
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
            this.setLangIco();
        })
    }

    setLangIco() {
        // control lang-icon
        this.langIconSrc = `assets/logo/${this.translate.currentLang}-icon.png`;
    }

    async changeLanguage() {
        const popover = await this.popoverCtrl.create({
            component: ChoseLanguageComponent,
            translucent: true,
            componentProps: {
                currentLang: this.translate.currentLang,
            }
          });
          return await popover.present();
    }

    goToOtherPage(url: string) {
        this.navCtrl.navigateForward(url);
    }

    contactUs() {
        this.callNumber.callNumber("098381832", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }

    logout() {
        this.authService.signOut();
    }
}
