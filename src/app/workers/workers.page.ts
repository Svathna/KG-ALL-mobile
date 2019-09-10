import { Component, OnInit } from "@angular/core";
import { WorkersService } from "../services/workers.service";
import { User, UserType } from "../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.page.html",
  styleUrls: ["./workers.page.scss"]
})
export class WorkersPage implements OnInit {
  workers: User[];

  constructor(private workersService: WorkersService, private router: Router) {
    this.workersService.workersLoaded.subscribe(workers => {
      this.workers = workers;
    });
  }

  ngOnInit() {
    // this.workers = this.workersService.workers;
    this.workersService.getWorkers(UserType.WORKER);
  }

  goToWorker(worker: User) {
    this.router.navigate([`/workers/${worker._id}`]);
    console.log("get worker");
  }
}
