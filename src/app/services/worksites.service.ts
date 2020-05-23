import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "src/environments/environment";
import { Company } from "../models/company.model";

export interface WorksiteResponse {
    company: Company;
    success: boolean;
}

@Injectable({
    providedIn: "root",
})
export class WorksitesService {
    constructor(private http: HttpClient) {}

    getCompany() {
      return this.http.get(environment.apiURL + '/company/current/safe');
    }

    // getWorksites() {
    //   this.http.get(environment.apiURL + '/worksites')
    //     .subscribe(( response: WorksitesResponse) => {
    //       this.worksites = response.worksites;
    //       this.worksitesLoaded.emit(this.worksites);
    //     });
    // }

    // getWorksite(id) {
    //   if (!id) {
    //     return false;
    //   }
    //   this.http.get(environment.apiURL + '/worksites/' + id)
    //     .subscribe(( response: WorksiteResponse) => {
    //       this.worksite = response.worksite;
    //       this.worksiteLoaded.emit(this.worksite);
    //     });
    // }
}
