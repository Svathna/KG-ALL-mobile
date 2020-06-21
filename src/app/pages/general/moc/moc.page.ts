import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Moc, MocResponse, DocResponse, Doc } from "src/app/models/company.model";
import { CompanyService } from "src/app/services/company.service";
import * as moment from 'moment';

declare var require: any;
const FileSaver = require("file-saver");

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
	docs: Doc;
	companyTypeInKhmer = COMPANY_TYPE_IN_KHMER;
    isFetching = false;
	moment: any = moment;

    constructor(
        private navCtr: NavController,
        private companyService: CompanyService
    ) {}

    ngOnInit() {
		this.fetchMocData();
		this.fetchDocData();
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
	
	fetchDocData() {
		this.companyService.getCompanyDocs().subscribe((data: DocResponse) => {
			if (data && data.doc) {
				this.docs = data.doc;
            }
		});
	}

	dowloadPDF (url: string, docName: string) {
		console.log('yaaa');
		if (!url) {
			return;
		}
		FileSaver.saveAs(url, docName ? docName : '');
	}

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
