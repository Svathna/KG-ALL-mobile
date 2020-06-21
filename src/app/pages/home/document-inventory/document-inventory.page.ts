import { Component, OnInit } from "@angular/core";
import { NavController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';
import { Doc, DocResponse } from 'src/app/models/company.model';

declare var require: any;
const FileSaver = require("file-saver");

@Component({
    selector: "app-document-inventory",
    templateUrl: "./document-inventory.page.html",
    styleUrls: ["./document-inventory.page.scss"],
})
export class DocumentInventoryPage implements OnInit {
	docs: Doc;
	isFetching = false;

    constructor(
		private navCtr: NavController,
		private companyService: CompanyService,
	) {}

	ngOnInit() {
		this.fetchDocData();
	}
	
	fetchDocData() {
		this.isFetching = true;
		this.companyService.getCompanyDocs().subscribe((data: DocResponse) => {
			this.isFetching = false;
			if (data && data.doc) {
				this.docs = data.doc;
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
