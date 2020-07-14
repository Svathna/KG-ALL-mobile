import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaxHistory } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { TaxHistoryResponse, TaxPerMonth } from 'src/app/interfaces/tax-per-month.interface';
import { TaxPerMonthsService } from 'src/app/services/tax-per-months.service';

export const MONTHS = [
  'មករា',
  'កុម្ភៈ',
  'មីនា',
  'មេសា',
  'ឧសភា',
  'មិថុនា',
  'កក្កដា',
  'សីហា',
  'កញ្ញា',
  'តុលា',
  'វិច្ឆិកា',
  'ធ្នូ',
];

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.page.html',
  styleUrls: ['./obligation.page.scss'],
})
export class ObligationPage implements OnInit {
  arrayMonths = MONTHS;
  currentDate = new Date();
  taxHistory: TaxHistory;
  taxPerMonths: TaxPerMonth[] = [];
  isFetching = false;

  constructor(
    private navCtr: NavController,
    private companyService: CompanyService,
    private taxPerMonthService: TaxPerMonthsService,
  ) { }

  ngOnInit() {
    // this.fetchTaxhistory();
  }

  backHome() {
    this.navCtr.navigateBack("home");
  }

  fetchTaxhistory() {
    this.isFetching = true;
    this.companyService.getTaxHistory().subscribe((data: TaxHistoryResponse) => {
      this.isFetching = false;
      if (data && data.taxHistory) {
        this.taxHistory = data.taxHistory;
        this.buildTaxPerMonths();
      }
    });
  }

  async buildTaxPerMonths(){
    let taxPerMonths: TaxPerMonth[];
    if (!this.taxHistory.taxPerMonths) {
      taxPerMonths = [];
    }
    this.isFetching = true;
    const arrayData: TaxPerMonth[] = await this.taxPerMonthService.buildTaxPerMonths(taxPerMonths ? taxPerMonths : this.taxHistory.taxPerMonths);
    this.taxPerMonths = [...arrayData];
    this.isFetching = false;
    console.log(this.taxPerMonths);
  }

}
