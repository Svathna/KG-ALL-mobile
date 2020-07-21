import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
  ) { }

  async error(message) {
    const alert = await this.alertController.create({
      header: 'កំហុស',
      message,
      buttons: ['យល់ព្រម']
    });

    await alert.present();
  }
}
