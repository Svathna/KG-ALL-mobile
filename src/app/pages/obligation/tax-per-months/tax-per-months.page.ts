import { Component, OnInit } from '@angular/core';
import { TaxPerMonth, TaxHistoryResponse } from 'src/app/interfaces/tax-per-month.interface';
import { MONTHS } from '../obligation.page';
import { TaxHistory } from 'src/app/models/company.model';
import { NavController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';
import { TaxPerMonthsService } from 'src/app/services/tax-per-months.service';

@Component({
  selector: 'app-tax-per-months',
  templateUrl: './tax-per-months.page.html',
  styleUrls: ['./tax-per-months.page.scss'],
})
export class TaxPerMonthsPage implements OnInit {
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
    this.fetchTaxhistory();
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
