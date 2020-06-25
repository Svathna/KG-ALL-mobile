import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
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
    private toast: ToastController,
    private alert: AlertController,
		private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.fetchMyRequest();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  fetchMyRequest() {
    this.isFetching = true;
    this.subs.sink = this.companyService.getMyRequests().subscribe((data: RequestsResponse) => {
      this.isFetching = false;
      if (data && data.success) {
        this.requests = data.requests;
      }
    });
  }

  deleteRequest(id: string) {
    if (!id) {
      return;
    }
    this.subs.sink = this.companyService.deleteRequest(id).subscribe((data: any) => {
      if (data && data.success) {
        this.toasterDeletedRequestSuccess();
        this.fetchMyRequest();
      } else {
        this.toasterDeletedRequestFailed();
      }
    });
  }

  toasterDeletedRequestSuccess() {
		const toast = this.toast.create({
			message: 'ពាក្យស្នើរត្រូវបានលុបចោល',
			duration: 3000,
			position: 'bottom'
		}).then(data => {
			data.present();
		});
  }
  
  toasterDeletedRequestFailed() {
		const toast = this.toast.create({
			message: 'error ប្រព័ន្ធមានបញ្ហា',
			duration: 3000,
			position: 'bottom'
		}).then(data => {
			data.present();
		});
  }
  
  alertConfrim(id: string) {
    this.alert.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.deleteRequest(id);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ],
    }).then(data => data.present());
  }

  backHome() {
    this.navCtr.navigateBack("home");
  }

}