import { Component, OnInit, OnDestroy } from "@angular/core";
import {
    NavController,
    ToastController,
    AlertController,
} from "@ionic/angular";
import { CompanyService } from "src/app/services/company.service";
import { RequestsResponse, Request, RequestStatus, RequestStatusInKhmer } from "src/app/models/request.model";
import { SubSink } from "subsink";
import { TranslateService } from '@ngx-translate/core';

const EequestStatusInKhmer = {

}

@Component({
    selector: "app-requests-page",
    templateUrl: "./requests-page.page.html",
    styleUrls: ["./requests-page.page.scss"],
})
export class RequestsPagePage implements OnInit, OnDestroy {
    requests: Request[] = [];
    isFetching = false;
    currentStatus = RequestStatus.PENDING;
    currentCardHeaderColor = 'primary';
    loadingCardNumber = [1, 2, 3, 4];
    headerTitle = 'REQUEST_PAGE.HEADER_1';
    requestStatusInKhmer = RequestStatusInKhmer;
    private subs = new SubSink();

    constructor(
        private navCtr: NavController,
        private toast: ToastController,
        private alert: AlertController,
        private companyService: CompanyService,
        private translate: TranslateService,
    ) {}

    ngOnInit() {
        this.fetchMyRequest();
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    fetchMyRequest(status: string = 'pending') {
        this.isFetching = true;
        this.subs.sink = this.companyService
            .getMyRequests({status})
            .subscribe((data: RequestsResponse) => {
                this.isFetching = false;
                if (data && data.success) {
                    this.requests = data.requests;
                }
            });
    }

    deleteRequest(id: string) {
        if (!id) {
            return;
        }
        this.subs.sink = this.companyService
            .deleteRequest(id)
            .subscribe((data: any) => {
                if (data && data.success) {
                    this.toasterDeletedRequestSuccess();
                    this.fetchMyRequest();
                } else {
                    this.toasterDeletedRequestFailed();
                }
            });
    }

    toasterDeletedRequestSuccess() {
        const toast = this.toast
            .create({
                message: this.translate.instant('MESSAGE.DELETE_REQUEST_SUCCESS'),
                duration: 3000,
                position: "bottom",
            })
            .then((data) => {
                data.present();
            });
    }

    toasterDeletedRequestFailed() {
        const toast = this.toast
            .create({
                message: this.translate.instant('MESSAGE.DETELE_REQUEST_FAILED'),
                duration: 3000,
                position: "bottom",
            })
            .then((data) => {
                data.present();
            });
    }

    alertConfrim(id: string) {
        this.alert
            .create({
                header: this.translate.instant('ALERT_CONFIRM.HEADER'),
                buttons: [
                    {
                        text: this.translate.instant('ALERT_CONFIRM.OK'),
                        handler: () => {
                            this.deleteRequest(id);
                        },
                    },
                    {
                        text: this.translate.instant('ALERT_CONFIRM.CANCEL'),
                        role: "cancel",
                        cssClass: "secondary",
                    },
                ],
            })
            .then((data) => data.present());
    }

    filter(status: string) {
        this.currentStatus = RequestStatus[status.toUpperCase()];
        this.setCardHeaderColor();
        this.fetchMyRequest(this.currentStatus);
    }

    setCardHeaderColor() {
        if (this.currentStatus === RequestStatus.PENDING) {
            this.currentCardHeaderColor = 'primary';
            this.headerTitle = 'REQUEST_PAGE.HEADER_1';
        } else {
            if (this.currentStatus === RequestStatus.ACCEPTED) {
                this.currentCardHeaderColor = 'success';
                this.headerTitle = 'REQUEST_PAGE.HEADER_2';
            } else {
                this.currentCardHeaderColor = 'warning';
                this.headerTitle = 'REQUEST_PAGE.HEADER_3';
            }
        }
    }

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
