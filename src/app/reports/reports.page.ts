import { Component, OnInit } from "@angular/core";
import { ReportsService } from "../services/reports.service";
import { Report } from "./reports.model";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.page.html",
  styleUrls: ["./reports.page.scss"]
})
export class ReportsPage implements OnInit {
  reports: Report[];
  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    this.reports = this.reportsService.reports;
  }
}
