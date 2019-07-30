import { Injectable } from "@angular/core";
import { Worker } from "../workers/workers.model";

@Injectable({
  providedIn: "root"
})
export class WorkersService {
  private _workers: Worker[] = [
    new Worker(
      "w1",
      "Robert Downy | Scafolder",
      "ID NUMBER : 123991928192838",
      "Team : Iron Man",
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    ),
    new Worker(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "Team : Iron Man",

      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    ),
    new Worker(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "Team : Iron Man",
      "http://static.asiawebdirect.com/m/bangkok/portals/cambodia/homepage/phnom-penh/pagePropertiesImage/phnom-penh.jpg.jpg"
    )
  ];

  get workers() {
    return [...this._workers];
  }

  constructor() {}
}
