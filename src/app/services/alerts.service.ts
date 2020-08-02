import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private translate: TranslateService,
  ) { }

  async error(message) {
    const alert = await this.alertController.create({
      header: this.translate.instant('ERROR'),
      message,
      buttons: [this.translate.instant('OK')]
    });

    await alert.present();
  }
}
