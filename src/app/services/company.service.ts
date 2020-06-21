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
    constructor(
        private navCtr: NavController,
        private http: HttpClient,
		private alertService: AlertService,
		private authService: AuthService,
	) {}
	
	getCompanyMoc() {
		const company = this.getCompanyLocal();
		if (!company) {
			this.authService.signOut();
		}
		const mocId = company.MOC._id ? company.MOC._id : company.MOC;
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
}
