import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Worksite } from '../models/worksite.model';

export interface WorksitesResponse {
  worksites: Worksite[];
  success: boolean;
}

export interface WorksiteResponse {
  worksite: Worksite;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WorksitesService {
  public worksites: Worksite[];
  public worksite: Worksite;
  public worksitesLoaded: EventEmitter<Worksite[]> = new EventEmitter();
  public worksiteLoaded: EventEmitter<Worksite> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  getWorksites() {
    this.http.get(environment.apiURL + '/worksites')
      .subscribe(( response: WorksitesResponse) => {
        this.worksites = response.worksites;
        this.worksitesLoaded.emit(this.worksites);
      });
  }

  getWorksite(id) {
    if (!id) {
      return false;
    }
    this.http.get(environment.apiURL + '/worksites/' + id)
      .subscribe(( response: WorksiteResponse) => {
        this.worksite = response.worksite;
        this.worksiteLoaded.emit(this.worksite);
      });
  }
}
