import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    DocumentViewer,
    FileOpener,
    AndroidPermissions,
    LocalNotifications,
    CallNumber,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
