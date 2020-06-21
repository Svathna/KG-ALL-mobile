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
        return company ? company : null;
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
}
