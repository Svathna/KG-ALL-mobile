import { Component, OnInit } from "@angular/core";
import { WorkersService } from "../services/workers.service";
import { Worker } from "./workers.model";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.page.html",
  styleUrls: ["./workers.page.scss"]
})
export class WorkersPage implements OnInit {
  workers: Worker[];

  constructor(private workersService: WorkersService) {}

  ngOnInit() {
    this.workers = this.workersService.workers;
  }
}
