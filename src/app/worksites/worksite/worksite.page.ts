import { WorksitesService } from './../../services/worksites.service';
import { Worksite } from './../../models/worksite.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-worksite',
  templateUrl: './worksite.page.html',
  styleUrls: ['./worksite.page.scss'],
})
export class WorksitePage implements OnInit {

  worksite: Worksite;
  worksiteId: string;

  constructor(
    private worksitesService: WorksitesService,
    private route: ActivatedRoute ) {
    this.worksitesService.worksiteLoaded.subscribe(worksite => {
      this.worksite = worksite;
    });
  }

  ngOnInit() {
    this.worksiteId = this.route.snapshot.paramMap.get('worksiteId');
    if (!this.worksiteId) {
      // maybe go to 404 page ?
      return false;
    }
    this.worksitesService.getWorksite(this.worksiteId);
  }

  refreshWorksite() {
    if (!this.worksiteId) {
      // maybe go to 404 page ?
      return false;
    }
    this.worksitesService.getWorksite(this.worksiteId);
  }
}
