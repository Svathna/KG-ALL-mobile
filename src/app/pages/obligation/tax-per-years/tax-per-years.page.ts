import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tax-per-years',
  templateUrl: './tax-per-years.page.html',
  styleUrls: ['./tax-per-years.page.scss'],
})
export class TaxPerYearsPage implements OnInit {

  constructor(
    private navCtl: NavController,
  ) { }

  ngOnInit() {
  }

  backHome() {
    this.navCtl.navigateBack("home");
  }

}
