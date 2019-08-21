import { Injectable, EventEmitter } from "@angular/core";
import { User, UserType } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface WorkersResponse {
  users: User[];
  success: boolean;
}
export interface WorkerResponse {
  user: User;
  success: boolean;
}
@Injectable({
  providedIn: "root"
})
export class WorkersService {
  public workers: User[];
  public workersLoaded: EventEmitter<User[]> = new EventEmitter();
  public worker: User;
  public workerLoaded: EventEmitter<User> = new EventEmitter();

  constructor(private http: HttpClient) {}

  getWorkers(type: UserType) {
    this.http
      .post(environment.apiURL + "/user/type", { type })
      .subscribe((response: WorkersResponse) => {
        this.workers = response.users;
        this.workersLoaded.emit(this.workers);
      });
  }

  getWorker(id) {
    this.http
      .get(environment.apiURL + "/user/" + id)
      .subscribe((response: WorkerResponse) => {
        this.worker = response.user;
        this.workerLoaded.emit(this.worker);
      });
  }
}
