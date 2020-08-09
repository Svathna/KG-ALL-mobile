import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import {
    Moc,
    MocResponse,
    DocResponse,
    Doc,
} from "src/app/models/company.model";
import { CompanyService } from "src/app/services/company.service";
import * as moment from "moment";
import { HelpersService } from 'src/app/services/helpers.service';

export const COMPANY_TYPE_IN_KHMER = [
    "សហគ្រាសឯកបុគ្គល",
    "ក្រុមហ៊ុនឯកជនទទួលខុសត្រូវមានកម្រិត",
    "ក្រុមហ៊ុនមហាជនទទួលខុសត្រូវមានកម្រិត",
];

export const COMPANY_TYPE = {
    1: "SOLE_PROPRIETORSHIPS",
    2: "PRIVATE_LIMITED_COMPANY",
    3: "PUBLIC_LIMITED_COMPANY",
};

@Component({
    selector: "app-moc",
    templateUrl: "./moc.page.html",
    styleUrls: ["./moc.page.scss"],
})
export class MocPage implements OnInit {
    moc: Moc;
    docs: Doc;
    companyType = COMPANY_TYPE;
    isFetching = false;
    moment: any = moment;

    constructor(
        private navCtr: NavController,
        private companyService: CompanyService,
        private helpersService: HelpersService,
    ) {}

    ngOnInit() {
        this.fetchMocData();
        this.fetchDocData();
    }

    fetchMocData() {
        this.isFetching = true;
        const company = this.companyService.getCompanyLocal();
        if (!company.MOC) {
            return (this.isFetching = false);
        }
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

    onClickDownload(url: string, docName: string) {
        if (!url) {
            return;
        }
        this.helpersService.getPermissionAndDownloadPdf(url, docName);
    }

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
