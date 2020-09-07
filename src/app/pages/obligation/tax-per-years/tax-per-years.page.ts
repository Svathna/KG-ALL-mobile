import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaxHistory } from 'src/app/models/company.model';
import { TaxPerYear } from 'src/app/interfaces/tax-per-year.interface';
import { CompanyService } from 'src/app/services/company.service';
import { TaxPerHistoryService } from 'src/app/services/tax-history.service';
import { TaxHistoryResponse, TaxPerMonth } from 'src/app/interfaces/tax-per-month.interface';

@Component({
  selector: 'app-tax-per-years',
  templateUrl: './tax-per-years.page.html',
  styleUrls: ['./tax-per-years.page.scss'],
})
export class TaxPerYearsPage implements OnInit {
  currentDate = new Date();
  taxHistory: TaxHistory;
  taxPerYears: TaxPerYear[] = [];
  isFetching = false;

  constructor(
    private navCtl: NavController,
    private companyService: CompanyService,
    private taxHistoryService: TaxPerHistoryService,
  ) { }

  ngOnInit() {
    this.fetchTaxhistory();
  }

  backHome() {
    this.navCtl.navigateBack("home");
  }

  fetchTaxhistory() {
    this.isFetching = true;
    this.companyService.getTaxHistory().subscribe((data: TaxHistoryResponse) => {
      this.isFetching = false;
      if (data && data.taxHistory) {
        this.taxHistory = data.taxHistory;
        this.buildTaxPerYears();
      }
    });
  }

  async buildTaxPerYears(){
    let taxPerYears: TaxPerYear[];
    if (!this.taxHistory.taxPerYears) {
      taxPerYears = [];
    }
    this.isFetching = true;
    const arrayData: TaxPerYear[] = await this.taxHistoryService.builTaxPerYears(taxPerYears ? taxPerYears : this.taxHistory.taxPerYears);
    this.taxPerYears = [...arrayData];
    this.isFetching = false;
  }

}
