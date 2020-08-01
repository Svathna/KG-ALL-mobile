import { Component, Input } from "@angular/core";
import { PopoverController, NavParams } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-chose-language",
    templateUrl: "./chose-language.component.html",
    styleUrls: ["./chose-language.component.scss"],
})
export class ChoseLanguageComponent {
	currentLang = 'kh';

    constructor(
        public popoverCtrl: PopoverController,
		private translate: TranslateService,
		public navParams: NavParams,
    ) {
		this.currentLang = this.navParams.get('currentLang')
	}

    close(lang: string) {
		setTimeout(() => {
			this.translate.use(lang);
		});
		setTimeout(() => {
			this.popoverCtrl.dismiss();
		}, 100);
    }
}
