import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-general-tax',
  templateUrl: './general-tax.page.html',
  styleUrls: ['./general-tax.page.scss'],
})
export class GeneralTaxPage implements OnInit {
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
      revenue: new FormControl('', [Validators.required]),
      expendWithInvoiceTotal: new FormControl(''),
      expendOnRenting: new FormControl(''),
      expendOnOutsideService: new FormControl(''),
    });
  }

  calculation() {
    console.log(this.taxCalculationForm.value);
    console.log('Implement me!');
    if (this.taxCalculationForm.invalid) {
      return;
    }
  }

  backTaxCalculation() {
    this.navCtl.navigateBack('tax-calculation');
  }

}
