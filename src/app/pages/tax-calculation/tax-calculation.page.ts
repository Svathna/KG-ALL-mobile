import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tax-calculation',
  templateUrl: './tax-calculation.page.html',
  styleUrls: ['./tax-calculation.page.scss'],
})
export class TaxCalculationPage implements OnInit {
  taxCalculationForm: FormGroup;

  constructor(
    private navCtl: NavController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.taxCalculationForm = this.formBuilder.group({
      revenue: new FormControl([Validators.required]),
      expendWithInvoiceTotal: new FormControl([Validators.required]),
      expendOnRenting: new FormControl([Validators.required]),
      expendOnOutsideService: new FormControl([Validators.required]),
    });
  }

  backHome() {
    this.navCtl.navigateBack('home');
  }

}
