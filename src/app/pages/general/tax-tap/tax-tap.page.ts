import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import * as moment from 'moment';
import { Dot, Doc, DotResponse, DocResponse } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { HelpersService } from 'src/app/services/helpers.service';
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
        private companyService: CompanyService,
        private helpersService: HelpersService,
    ) {}

    ngOnInit() {
		this.fetchDotData();
		this.fetchDocData();
	}

    fetchDotData() {
        this.isFetching = true;
        const company = this.companyService.getCompanyLocal();
        if (!company.DOT) {
            return this.isFetching = false;
        }
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
            }
		});
	}

	onClickDownload (url: string, docName: string) {
		if (!url) {
			return;
        }
        this.helpersService.getPermissionAndDownloadPdf(url, docName);
	}

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
