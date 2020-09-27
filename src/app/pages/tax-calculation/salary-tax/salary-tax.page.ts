import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController } from "@ionic/angular";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from "@angular/forms";
import { CurrencyPipe } from '@angular/common';

export interface CalucationInput {
    salary: number;
    bonus: number;
    spouse: boolean;
    children: number;
}

interface CalucationResults {
  salaryTax: number;
  bonusTax: number;
  totalTax: number;
  salaryLeft: number;
  // rate is percentage
  rate: number;
}

const LEVEL1 = 1300000;
const LEVEL2 = 2000000;
const LEVEL3 = 8500000;
const LEVEL4 = 12500000;

const RATE_LEVEL1 = 0.05;
const RATE_LEVEL2 = 0.1;
const RATE_LEVEL3 = 0.15;
const RATE_LEVEL4 = 0.2;


@Component({
    selector: "app-salary-tax",
    templateUrl: "./salary-tax.page.html",
    styleUrls: ["./salary-tax.page.scss"],
    providers: [CurrencyPipe],
})
export class SalaryTaxPage implements OnInit {
    btnFill = ["outline", "solid"];
    isHad = false;
    children = 0;
    taxCalculationForm: FormGroup;
    isShowingResults = false;
    calucationResults: CalucationResults;
    cardInputArray: CalucationInput[] = [];
    isEditing = false;
    indexInputEditing: number;
    salaryModel: any;
    bonusModel: any;

    constructor(
        private navCtl: NavController,
        private formBuilder: FormBuilder,
        public popoverCtrl: PopoverController,
        private currencyPipe: CurrencyPipe,
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.salaryModel = '';
        this.bonusModel = '';
        this.taxCalculationForm = this.formBuilder.group({
            salary: new FormControl("", [
                Validators.required,
                Validators.min(0),
            ]),
            bonus: new FormControl("", [Validators.min(0)]),
            spouse: new FormControl(this.isHad, [Validators.required]),
            children: new FormControl(this.children, [
                Validators.required,
                Validators.min(0),
            ]),
        });
    }

    radioButtonCLick() {
        this.isHad = !this.isHad;
        this.taxCalculationForm.controls['spouse'].setValue(this.isHad);
    }

    childrenIncrease() {
        this.children++;
        this.taxCalculationForm.controls['children'].setValue(this.children);
    }

    childrenDecrese() {
        if (this.children <= 0) {
            return;
        }
        this.children--;
        this.taxCalculationForm.controls["children"].setValue(this.children);
    }

    calculation() {
        if (this.taxCalculationForm.invalid) {
            return;
        }
        const value: CalucationInput = this.taxCalculationForm.value;
        console.log(value);
        this.calucationResults = this.taxCalculator(value);
        this.isShowingResults = true;
    }

    taxCalculator(value: CalucationInput): CalucationResults {
        const { bonus } = value;

        const salary = this.taxBaseCalculator(value);

        // sanity check
        if (!salary || salary <= 0) {
            return;
        }

        let rate;
        let minusNumber;

        if (salary <= LEVEL1) {
            rate = 0;
            minusNumber = 0;
        } else if (salary <= LEVEL2) {
            rate = RATE_LEVEL1;
            minusNumber = 65000;
        } else if (salary <= LEVEL3) {
            rate = RATE_LEVEL2;
            minusNumber = 165000;
        } else if (salary < LEVEL4) {
            rate = RATE_LEVEL3;
            minusNumber = 590000;
        } else {
            rate = RATE_LEVEL4
            minusNumber = 1215000;
        }

        let salaryTax;

        // sanity check
        if (!rate) {
            salaryTax = 0;
        } else {
            salaryTax = (salary * rate) - minusNumber;
        }

        // Calculate bonus tax
        const bonusTax = bonus * 0.2;

        return {
            salaryTax: salaryTax,
            bonusTax,
            totalTax: salaryTax + bonusTax,
            salaryLeft: (value.salary + bonus) - (salaryTax + bonusTax),
            rate: rate * 100,
        };
    }

    taxBaseCalculator(value: CalucationInput) {
        const { salary, spouse, children } = value;

        let taxBase;

        if (salary && salary > 0) {
            const burdenAmount = spouse ? children + 1 : children;
            // if burdenAmount
            taxBase = burdenAmount > 0 ? salary - (burdenAmount * 150000) : salary;
        } else {
            taxBase = 0;
        }

        return taxBase;
    }

    resetForm() {
        this.isHad = false;
        this.children = 0;
        this.buildForm();
        this.isShowingResults = false;
    }

    saveForCalculation() {
        if (this.taxCalculationForm.invalid) {
            return;
        }
        this.cardInputArray.push(this.taxCalculationForm.value);
        this.resetForm();
    }

    editInput(index: number) {
        this.isEditing = true;
        this.indexInputEditing = index;
        this.resetForm();
        this.taxCalculationForm.patchValue(this.cardInputArray[index]);
    }

    cancelEdit() {
        this.resetForm();
        this.isEditing = false;
        this.indexInputEditing = null;
    }

    saveEdit() {
        if (this.taxCalculationForm.invalid) {
            return;
        }
        this.cardInputArray[this.indexInputEditing] = this.taxCalculationForm.value;
        this.resetForm();
    }

    salaryInput(event) {
        const value = parseFloat((event.target.value).replace(/,/g, '').replace(/៛/g, ''));
        this.taxCalculationForm.controls['salary'].setValue(value);
        this.salaryModel = this.getCurrencyFormat(value);
    }

    bonusInput(event) {
        const value = parseFloat((event.target.value).replace(/,/g, '').replace(/៛/g, ''));
        this.taxCalculationForm.controls['bonus'].setValue(value);
        this.bonusModel = this.getCurrencyFormat(value);
    }

    getCurrencyFormat(value: number) {
        if (value) {
            if (!value.toString().includes('$')) {
                return this.currencyPipe.transform(value, 'KHR', '៛', '1.0-0');
            }
        }
    }

    backTaxCalculation() {
        this.navCtl.navigateBack("tax-calculation");
    }
}
