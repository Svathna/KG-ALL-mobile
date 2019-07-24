import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Worksite } from '../models/worksite.model';
import { EventEmitter } from '@angular/core';

export interface WorksiteResponse {
  worksites: Worksite[],
  success: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class WorksitesService {
  public worksites: Worksite[];
  public worksitesLoaded: EventEmitter<Worksite[]> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  getWorksites() {
    this.http.get(environment.apiURL + '/worksites')
      .subscribe(( response: WorksiteResponse) => {
        this.worksites = response.worksites;
        this.worksitesLoaded.emit(this.worksites);
      });
  }
}
