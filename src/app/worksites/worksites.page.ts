import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WorksitesService } from "../services/worksites.service";
import { Worksite } from "../models/worksite.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-worksites",
  templateUrl: "./worksites.page.html",
  styleUrls: ["./worksites.page.scss"]
})
export class WorksitesPage implements OnInit {
  worksites: Worksite[];
  ionicNamedColor: string = "medium";
  constructor(
    private worksiteService: WorksitesService,
    private router: Router
  ) {
    this.worksiteService.worksitesLoaded.subscribe(worksites => {
      this.worksites = worksites;
    });
  }

  ngOnInit() {
    this.worksiteService.getWorksites();
  }

  goToWorksite(worksite: Worksite) {
    this.router.navigate([`/worksites/${worksite._id}`]);
  }

  refreshWorksites() {
    this.worksiteService.getWorksites();
  }

  public toggleNamedColor(): void {
    if (this.ionicNamedColor === "medium") {
      this.ionicNamedColor = "primary";
    } else {
      this.ionicNamedColor = "medium";
    }
  }
}
