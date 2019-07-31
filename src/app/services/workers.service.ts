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
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/09/1519821818-iron-man-worried-avengers-robert-downey-jr.jpg?crop=0.5373134328358209xw:1xh;center,top&resize=480:*"
    ),
    new Worker(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "Team : Iron Man",
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/09/1519821818-iron-man-worried-avengers-robert-downey-jr.jpg?crop=0.5373134328358209xw:1xh;center,top&resize=480:*"
    ),
    new Worker(
      "w2",
      "Report’s Id : #131329",
      "Elon Musk / 27 May 2020",
      "Team : Iron Man",
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/09/1519821818-iron-man-worried-avengers-robert-downey-jr.jpg?crop=0.5373134328358209xw:1xh;center,top&resize=480:*"
    )
  ];

  get workers() {
    return [...this._workers];
  }

  constructor() {}
}
