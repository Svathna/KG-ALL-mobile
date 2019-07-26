import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { Worksite } from '../models/worksite.model';

export interface WorksiteResponse {
  worksite: Worksite;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WorksiteService {
  public worksite: Worksite;
  public worksiteLoaded: EventEmitter<Worksite> = new EventEmitter();

  constructor(
    private http: HttpClient,
  ) { }

  getWorksite(id) {
    this.http.get(environment.apiURL + '/worksites/' + id)
      .subscribe(( response: WorksiteResponse) => {
        this.worksite = response.worksite;
        this.worksiteLoaded.emit(this.worksite);
      });
  }
}
