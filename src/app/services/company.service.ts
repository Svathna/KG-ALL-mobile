import { Injectable } from "@angular/core";
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alerts.service';
import { CompanyDetail } from '../models/company.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root",
})
export class CompanyService {
	company: CompanyDetail;

    constructor(
        private navCtr: NavController,
        private http: HttpClient,
		private alertService: AlertService,
		private authService: AuthService,
	) {}
	
	getCompanyMoc() {
		if (!this.company) {
			this.company = this.getCompanyLocal();
			if (!this.company) {
				this.authService.signOut();
			}
		}
		const mocId = this.company.MOC._id ? this.company.MOC._id : this.company.MOC;
		return this.http.get(environment.apiURL + `/moc/${mocId}`);
	}

	getCompanyLocal() {
		const company: CompanyDetail = JSON.parse(localStorage.getItem("company"));
		if (!company) {
			this.authService.signOut();
		}
        return company;
	}

	setCompanyToLocal(company: CompanyDetail) {
		if (!company) {
			return;
		}
		localStorage.setItem(
			"company",
			JSON.stringify(company),
		);
	}

	getCompanyDocs() {
		if (!this.company) {
			this.company = this.getCompanyLocal();
			if (!this.company) {
				this.authService.signOut();
			}
		}
		const docId = this.company.docs._id ? this.company.docs._id : this.company.docs;
		return this.http.get(environment.apiURL + `/doc/${docId}`);
	}

	getCompanyDot() {
		if (!this.company) {
			this.company = this.getCompanyLocal();
			if (!this.company) {
				this.authService.signOut();
			}
		}
		const dotId = this.company.DOT._id ? this.company.DOT._id : this.company.DOT;
		return this.http.get(environment.apiURL + `/dot/${dotId}`);
	}

	getCompanyId() {
		if (!this.company) {
			this.company = this.getCompanyLocal();
			if (!this.company) {
				this.authService.signOut();
			}
		}
		return this.company._id;
	}

	getMyRequests(body) {
		const id = this.getCompanyId();
		return this.http.post(environment.apiURL + `/request/company/${id}`, body);
	}

	sendRequest(body) {
		return this.http.post(environment.apiURL + `/request` , body)
	}

	deleteRequest(id: string) {
		return this.http.delete(environment.apiURL + `/request/${id}`);
	}

	getTaxHistory() {
		if (!this.company) {
			this.company = this.getCompanyLocal();
			if (!this.company) {
				this.authService.signOut();
			}
		}
		if (!this.company.taxHistory) {
			return;
		}
		const id = this.company.taxHistory;
		return this.http.get(environment.apiURL + `/tax/${id}`);
	}
}
