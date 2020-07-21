import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';
import { Doc, DocResponse } from 'src/app/models/company.model';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
    selector: "app-document-inventory",
    templateUrl: "./document-inventory.page.html",
    styleUrls: ["./document-inventory.page.scss"],
})
export class DocumentInventoryPage implements OnInit {
	docs: Doc;
	isFetching = false;
	requestForm: FormGroup;
	companyId: string;

    constructor(
		private navCtr: NavController,
		private companyService: CompanyService,
		private fb: FormBuilder,
		private toast: ToastController,
        private helpersService: HelpersService,
	) {}

	ngOnInit() {
		this.fetchDocData();
		this.builRequestForm();
	}

	builRequestForm() {
		this.requestForm = this.fb.group({
			description: new FormControl('', [Validators.required, Validators.minLength(5)]),
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
		})
	}

	toasterRequestSuccess() {
		const toast = this.toast.create({
			message: 'ការស្នើត្រូវបានបញ្ជូនទៅក្នុងប្រព័ន្ធ',
			duration: 3000,
			position: 'bottom'
		}).then(data => {
			data.present();
		});
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

	onClickdownload (url: string, docName: string) {
		if (!url) {
			return;
		}
		this.helpersService.getPermissionAndDownloadPdf(url, docName);
	}

    backHome() {
        this.navCtr.navigateBack("home");
    }
}
