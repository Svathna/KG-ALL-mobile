import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(
    private localNotifications: LocalNotifications,
    private androidPermissions: AndroidPermissions,
    private fileOpener: FileOpener,
    private transfer: FileTransfer,
    private file: File,
  ) { }

  pushDownloadedPdfNotification() {
    this.localNotifications.schedule({
      id: new Date().getMilliseconds(),
      group: 'KG-ALL',
      text: 'Your pdf download compeleted',
      icon: 'res://kgall-app-logo.png',
      smallIcon: 'res://kgall-app-logo.png',
    });
  }

  getPermissionAndDownloadPdf(url: string, docName: string) {
    this.androidPermissions
        .hasPermission(
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
        )
        .then((status) => {
            if (status.hasPermission) {
              this.downloadPdf(url, docName);
            } else {
                this.androidPermissions
                    .requestPermission(
                        this.androidPermissions.PERMISSION
                            .WRITE_EXTERNAL_STORAGE
                    )
                    .then((status) => {
                        if (status.hasPermission) {
                          this.downloadPdf(url, docName);
                        }
                    });
            }
        });
  }

  downloadPdf(url: string, docName: string) {
    const uri = encodeURI(url);
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer
        .download(
            uri,
            this.file.externalRootDirectory + `/Download/${docName}.pdf`
        )
        .then(
            (entry) => {
                this.pushDownloadedPdfNotification()
                const url = entry.nativeURL;
                this.fileOpener.showOpenWithDialog(url, 'application/pdf')
                  .then((data) => {
                      console.log('File is opened');
                    })
                  .catch(e => console.log('Error opening file', e));
            },
            (error) => {
                // handle error
                console.log(error);
            }
        );
}
}
