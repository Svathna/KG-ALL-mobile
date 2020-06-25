import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tax-calculation',
  templateUrl: './tax-calculation.page.html',
  styleUrls: ['./tax-calculation.page.scss'],
})
export class TaxCalculationPage implements OnInit {

  constructor(
    private navCtl: NavController,
  ) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtl.navigateBack('home');
  }

}
