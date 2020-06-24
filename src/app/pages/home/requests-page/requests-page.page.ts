import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';
import { RequestsResponse, Request } from 'src/app/models/request.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.page.html',
  styleUrls: ['./requests-page.page.scss'],
})
export class RequestsPagePage implements OnInit, OnDestroy {
  requests: Request[] = [];
  isFetching = false;
  private subs = new SubSink();

  constructor(
    private navCtr: NavController,
		private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.fetchMyRequest();
  }

  ngOnDestroy() {
    console.log(this.subs);
    this.subs.unsubscribe();
    console.log(this.subs);
  }

  fetchMyRequest() {
    this.isFetching = true;
    this.subs.sink = this.companyService.getMyRequests().subscribe((data: RequestsResponse) => {
      this.isFetching = false;
      if (data && data.success) {
        this.requests = data.requests;
        console.log(this.requests);
      }
    });
  }

  backHome() {
    this.navCtr.navigateBack("home");
  }

}
