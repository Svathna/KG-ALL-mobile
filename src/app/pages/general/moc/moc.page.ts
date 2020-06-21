import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Moc, MocResponse } from "src/app/models/company.model";
import { CompanyService } from "src/app/services/company.service";
import * as moment from 'moment';

export const COMPANY_TYPE_IN_KHMER = [
	'',
	'សហគ្រាសឯកបុគ្គល',
	'ក្រុមហ៊ុនឯកជនទទួលខុសត្រូវមានកម្រិត',
	'ក្រុមហ៊ុនមហាជនទទួលខុសត្រូវមានកម្រិត',
  ]

@Component({
    selector: "app-moc",
    templateUrl: "./moc.page.html",
    styleUrls: ["./moc.page.scss"],
})
export class MocPage implements OnInit {
	moc: Moc;
	companyTypeInKhmer = COMPANY_TYPE_IN_KHMER;
    isFetching = false;
	moment: any = moment;

    constructor(
        private navCtr: NavController,
        private companyService: CompanyService
    ) {}

    ngOnInit() {
		this.fetchMocData();
	}

    fetchMocData() {
        this.isFetching = true;
        this.companyService.getCompanyMoc().subscribe((data: MocResponse) => {
            this.isFetching = false;
            if (data && data.moc) {
				this.moc = data.moc;
            }
        });
    }

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
