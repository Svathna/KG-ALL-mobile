import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-salary-tax',
  templateUrl: './salary-tax.page.html',
  styleUrls: ['./salary-tax.page.scss'],
})
export class SalaryTaxPage implements OnInit {
  btnFill = ['outline', 'solid'];
  isHad = false;
  children = 0;
  taxCalculationForm: FormGroup;

  constructor(
    private navCtl: NavController,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.taxCalculationForm = this.formBuilder.group({
      salary: new FormControl('', [Validators.required]),
      extraSalary: new FormControl(''),
      married: new FormControl(this.isHad, [Validators.required]),
      children: new FormControl(this.children, [Validators.required]),
    });
  }

  radioButtonCLick() {
    this.isHad = !this.isHad;
  }

  childrenIncrease() {
    this.children++;
    console.log(this.children);
    this.taxCalculationForm.controls['children'].setValue(this.children);
  }

  childrenDecrese() {
    if (this.children <=0) {
      return;
    }
    this.children--;
    console.log(this.children);
    this.taxCalculationForm.controls['children'].setValue(this.children);
  }

  backTaxCalculation() {
    this.navCtl.navigateBack('tax-calculation');
  }
}
