import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from 'moment';
import { Dot, Doc, DotResponse, DocResponse } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

declare var require: any;
const FileSaver = require("file-saver");
@Component({
    selector: "app-tax-tap",
    templateUrl: "./tax-tap.page.html",
    styleUrls: ["./tax-tap.page.scss"],
})
export class TaxTapPage implements OnInit {
    dot: Dot;
	docs: Doc;
    isFetching = false;
    isDocsFetching = false;
	moment: any = moment;

    constructor(
        private navCtr: NavController,
        private companyService: CompanyService
    ) {}

    ngOnInit() {
		this.fetchDotData();
		this.fetchDocData();
	}

    fetchDotData() {
        this.isFetching = true;
        this.companyService.getCompanyDot().subscribe((data: DotResponse) => {
            this.isFetching = false;
            if (data && data.dot) {
                this.dot = data.dot;
            }
        });
	}
	
	fetchDocData() {
        this.isDocsFetching = true;
		this.companyService.getCompanyDocs().subscribe((data: DocResponse) => {
            this.isDocsFetching = false;
			if (data && data.doc) {
                this.docs = data.doc;
                console.log(this.docs);
            }
		});
	}

	dowloadPDF (url: string, docName: string) {
		if (!url) {
			return;
		}
		FileSaver.saveAs(url, docName ? docName : '');
	}

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
