import { Component, OnInit } from "@angular/core";
import { WorkersService } from "src/app/services/workers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-worker-details",
  templateUrl: "./worker-details.component.html",
  styleUrls: ["./worker-details.component.scss"]
})
export class WorkerDetailsComponent implements OnInit {
  worker: User;
  workerId: string;

  constructor(
    private workerService: WorkersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.workerService.workerLoaded.subscribe(worker => {
      this.worker = new User(worker);
    });
    this.workerId = this.route.snapshot.paramMap.get("workerId");

    if (!this.workerId) {
      this.router.navigate([`/workers`]);
    }
    this.workerService.getWorker(this.workerId);
  }
}
