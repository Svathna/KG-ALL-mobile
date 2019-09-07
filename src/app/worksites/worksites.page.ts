import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { WorksitesService } from "../services/worksites.service";
import { Worksite } from "../models/worksite.model";

@Component({
  selector: "app-worksites",
  templateUrl: "./worksites.page.html",
  styleUrls: ["./worksites.page.scss"]
})
export class WorksitesPage implements OnInit {
  worksites: Worksite[];
  ionicNamedColor: string = "medium";
  constructor(private worksiteService: WorksitesService) {
    this.worksiteService.worksitesLoaded.subscribe(worksites => {
      this.worksites = worksites;
    });
  }

  ngOnInit() {
    this.worksiteService.getWorksites();
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
