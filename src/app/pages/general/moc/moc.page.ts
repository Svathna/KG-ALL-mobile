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
import { File } from "@ionic-native/file/ngx";
import {
    FileTransfer,
    FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HelpersService } from 'src/app/services/helpers.service';

export const COMPANY_TYPE_IN_KHMER = [
    "",
    "សហគ្រាសឯកបុគ្គល",
    "ក្រុមហ៊ុនឯកជនទទួលខុសត្រូវមានកម្រិត",
    "ក្រុមហ៊ុនមហាជនទទួលខុសត្រូវមានកម្រិត",
];

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
