import { Injectable } from "@angular/core";
import { Report } from "../reports/reports.model";

@Injectable({
  providedIn: "root"
})
export class ReportsService {
  private _reports: Report[] = [
    new Report(
      "w1",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "../../assets/login.png"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "../../assets/login.png"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "../../assets/login.png"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "../../assets/login.png"
    )
  ];

  get reports() {
    return [...this._reports];
  }

  constructor() {}
}
