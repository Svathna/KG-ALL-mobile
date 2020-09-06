import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { CompanyService } from "src/app/services/company.service";
import { Doc, DocResponse, OtherDocument } from "src/app/models/company.model";
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
} from "@angular/forms";
import { HelpersService } from "src/app/services/helpers.service";
import { debounce, debounceTime } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: "app-document-inventory",
    templateUrl: "./document-inventory.page.html",
    styleUrls: ["./document-inventory.page.scss"],
})
export class DocumentInventoryPage implements OnInit {
	docs: Doc;
	otherDocsFiltered: OtherDocument[] = [];
    isFetching = false;
    requestForm: FormGroup;
	companyId: string;
	currentLang = 'kh';

    constructor(
        private navCtr: NavController,
        private companyService: CompanyService,
        private fb: FormBuilder,
        private toast: ToastController,
		private helpersService: HelpersService,
		private translate: TranslateService,
    ) {}

    ngOnInit() {
        this.fetchDocData();
		this.builRequestForm();
		this.currentLang = this.translate.currentLang;
    }

    builRequestForm() {
        this.requestForm = this.fb.group({
            description: new FormControl("", [
                Validators.required,
                Validators.minLength(3),
            ]),
        });
    }

    async submitRequest() {
        if (this.requestForm.invalid) {
            return;
        }
        this.isFetching = true;
        const companyId = await this.companyService.getCompanyId();
        const value = this.requestForm.value;
        this.requestForm.reset();
        Object.assign(value, { companyId });
        this.companyService.sendRequest(value).subscribe((data: any) => {
            this.isFetching = false;
            if (data && data.success) {
                this.toasterRequestSuccess();
            }
        });
    }

    toasterRequestSuccess() {
        const toast = this.toast
            .create({
                message: this.translate.instant('MESSAGE.REQUEST_SUCCESS'),
                duration: 3000,
                position: "bottom",
            })
            .then((data) => {
                data.present();
            });
    }

    fetchDocData() {
        this.isFetching = true;
        this.companyService.getCompanyDocs().subscribe((data: DocResponse) => {
            this.isFetching = false;
            if (data && data.doc) {
				this.docs = data.doc;
				this.otherDocsFiltered = this.docs.others;
            }
        });
    }

    onClickdownload(url: string, docName: string) {
        if (!url) {
            return;
        }
        this.helpersService.getPermissionAndDownloadPdf(url, docName);
    }

    filterDocs(event) {
		const searchValue = event.srcElement.value;

        if (!searchValue) {
            return this.otherDocsFiltered = this.docs.others;
		}

        this.otherDocsFiltered = this.docs.others.filter((doc) => {
            if (doc.title && searchValue) {
				if (this.currentLang === 'en') {
					return (
						doc.title
							.toLowerCase()
							.indexOf(searchValue.toLowerCase()) > -1
					);
				} else {
					return (
						doc.titleInKhmer
							.toLowerCase()
							.indexOf(searchValue.toLowerCase()) > -1
					);
				}
            }
		});
    }

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
