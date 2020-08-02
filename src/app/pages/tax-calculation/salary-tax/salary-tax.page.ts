import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from "@angular/forms";

interface CalucationInput {
    salary: number;
    extraSalary: number;
    hasPartnerWithIncome: boolean;
    children: number;
}

interface CalucationResults {
  salaryTax: number;
  extraSalaryTax: number;
}

@Component({
    selector: "app-salary-tax",
    templateUrl: "./salary-tax.page.html",
    styleUrls: ["./salary-tax.page.scss"],
})
export class SalaryTaxPage implements OnInit {
    btnFill = ["outline", "solid"];
    isHad = false;
    children = 0;
    taxCalculationForm: FormGroup;
    isShowingResults = false;
    cardInputArray: CalucationInput[] = [];

    constructor(
        private navCtl: NavController,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.taxCalculationForm = this.formBuilder.group({
            salary: new FormControl("", [
                Validators.required,
                Validators.min(0),
            ]),
            extraSalary: new FormControl("", [Validators.min(0)]),
            hasPartnerWithIncome: new FormControl(this.isHad, [Validators.required]),
            children: new FormControl(this.children, [
                Validators.required,
                Validators.min(0),
            ]),
        });
    }

    radioButtonCLick() {
        this.isHad = !this.isHad;
        this.taxCalculationForm.controls['hasPartnerWithIncome'].setValue(this.isHad);
    }

    childrenIncrease() {
        this.children++;
        console.log(this.children);
        this.taxCalculationForm.controls['children'].setValue(this.children);
    }

    childrenDecrese() {
        if (this.children <= 0) {
            return;
        }
        this.children--;
        console.log(this.children);
        this.taxCalculationForm.controls["children"].setValue(this.children);
    }

    calculation() {
        console.log(this.taxCalculationForm.value);
        console.log("Implement me!");
        if (this.taxCalculationForm.invalid) {
            return;
        }
        const value: CalucationInput = this.taxCalculationForm.value;
        // this.calucationResults = this.taxCalculator(value);
    }

    taxCalculator(value: CalucationInput): CalucationResults {
        return;
    }

    resetForm() {
        this.buildForm();
    }

    saveForCalculation() {
        console.log('waeeee')
        if (this.taxCalculationForm.invalid) {
            console.log(this.taxCalculationForm)
            return;
        }
        this.cardInputArray.push(this.taxCalculationForm.value);
        this.resetForm();
        console.log(this.cardInputArray);
    }

    backTaxCalculation() {
        this.navCtl.navigateBack("tax-calculation");
    }
}
