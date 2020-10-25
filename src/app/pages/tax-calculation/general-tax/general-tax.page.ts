import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import {
    FormGroup,
    FormBuilder,
    FormControl,
    Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";

interface CalucationInput {
    revenue: number;
    expendWithInvoiceTotal: number;
    expendOnRenting: number;
    expendOnOutsideService: number;
}

interface CalucationResults {
  incomeTax: number;
  valueAddedTax: number;
  rentingTax: number;
  serviceTax: number;
}

const MULTIPLE_OF_TAX = 1.1;
const PERCENT_OF_TAX = 0.01;

@Component({
    selector: "app-general-tax",
    templateUrl: "./general-tax.page.html",
    styleUrls: ["./general-tax.page.scss"],
    providers: [CurrencyPipe],
})
export class GeneralTaxPage implements OnInit {
    taxCalculationForm: FormGroup;
    calucationResults: CalucationResults;
    isShowingResults = false;
    revenueModel: any;
    expendWithInvoiceTotalModel: any;
    expendOnRentingModel: any;
    expendOnOutsideServiceModel: any;

    constructor(
        private navCtl: NavController,
        private formBuilder: FormBuilder,
        private currencyPipe: CurrencyPipe,
    ) {}

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.resetModel();
        this.taxCalculationForm = this.formBuilder.group({
            revenue: new FormControl("", [
                Validators.required,
                Validators.min(0),
            ]),
            expendWithInvoiceTotal: new FormControl("", [Validators.min(0)]),
            expendOnRenting: new FormControl("", [Validators.min(0)]),
            expendOnOutsideService: new FormControl("", [Validators.min(0)]),
        });
    }

    calculation() {
        if (this.taxCalculationForm.invalid) {
            return;
        }
        const value: CalucationInput = this.taxCalculationForm.value;
        this.calucationResults = this.taxCalculator(value);
        this.isShowingResults = true;
    }

    resetModel() {
        this.revenueModel = '';
        this.expendOnRentingModel = '';
        this.expendOnOutsideServiceModel = '';
        this.expendWithInvoiceTotalModel = '';
    }

    reset() {
        this.resetModel();
        this.taxCalculationForm.reset();
        this.isShowingResults = false;
    }

    taxCalculator(value: CalucationInput): CalucationResults {
        // calculate
        const incomeTax = Math.round((value.revenue / MULTIPLE_OF_TAX) * PERCENT_OF_TAX);

        const valueAddedTax = Math.round(((value.revenue / MULTIPLE_OF_TAX) * 0.1) - ((value.expendWithInvoiceTotal / MULTIPLE_OF_TAX) * 0.1));

        const rentingTax = Math.round(value.expendOnRenting * 0.1);

        const serviceTax = Math.round(value.expendOnOutsideService * 0.15);
        
        // return
        return {
            incomeTax,
            valueAddedTax,
            rentingTax,
            serviceTax,
        }
    }

    onInputValue(event, controlName: string) {
        const value = parseFloat((event.target.value).replace(/,/g, '').replace(/៛/g, ''));
        this.taxCalculationForm.controls[controlName].setValue(value);

        if(controlName === 'revenue') {
            this.revenueModel = this.getCurrencyFormat(value);
        } else if(controlName === 'expendWithInvoiceTotal') {
            this.expendWithInvoiceTotalModel = this.getCurrencyFormat(value);
        } else if(controlName === 'expendOnRenting') {
            this.expendOnRentingModel = this.getCurrencyFormat(value);
        } else if(controlName === 'expendOnOutsideService') {
            this.expendOnOutsideServiceModel = this.getCurrencyFormat(value);
        } else {
            return;
        }
    }

    getCurrencyFormat(value: number) {
        if (value) {
            console.log('Input value: ', value)
            if (!value.toString().includes('$')) {
                return this.currencyPipe.transform(value, 'KHR', '៛', '1.0-0');
            }
        }
    }

    backTaxCalculation() {
        this.navCtl.navigateBack("tax-calculation");
    }
}
