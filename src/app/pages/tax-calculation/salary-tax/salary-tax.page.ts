import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-salary-tax',
  templateUrl: './salary-tax.page.html',
  styleUrls: ['./salary-tax.page.scss'],
})
export class SalaryTaxPage implements OnInit {

  constructor(
    private navCtl: NavController,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
  }

  backTaxCalculation() {
    this.navCtl.navigateBack('tax-calculation');
  }

}
