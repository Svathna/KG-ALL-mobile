import { Component, Input } from "@angular/core";
import { PopoverController, NavParams } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-chose-language",
    templateUrl: "./chose-language.component.html",
    styleUrls: ["./chose-language.component.scss"],
})
export class ChoseLanguageComponent {
	isEn = false;
	currentLang = 'kh';

    constructor(
        public popoverCtrl: PopoverController,
		private translate: TranslateService,
		public navParams: NavParams,
    ) {
		// this.isEn = this.currentLang === 'en' ? true : false;
		console.log(this.isEn);
		this.currentLang = this.navParams.get('currentLang')
		console.log(this.navParams.get('currentLang'));
		console.log(this.navParams.data);
	}

    close(lang: string) {
		this.translate.use(lang);
		setTimeout(() => {
			this.popoverCtrl.dismiss();
		}, 100);
    }
}
