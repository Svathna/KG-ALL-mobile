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
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    ),
    new Report(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    )
  ];

  get reports() {
    return [...this._reports];
  }

  constructor() {}
}
