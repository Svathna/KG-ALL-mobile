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
  // id = '5d2eb57ad4594232574a603b';

  constructor(
    private worksitesService: WorksitesService,
    private route: ActivatedRoute ) {
    this.worksitesService.worksiteLoaded.subscribe(worksite => {
      this.worksite = worksite;
    });
  }

  ngOnInit() {
    this.worksiteId = this.route.snapshot.paramMap.get('worksiteId');
    this.worksitesService.getWorksite(this.worksiteId);
  }

  refreshWorksite() {
    this.worksitesService.getWorksite(this.worksiteId);
  }
}
