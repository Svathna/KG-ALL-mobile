import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { WorkerDetailsComponent } from "./workers/worker-details/worker-details.component";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [AppComponent, WorkerDetailsComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
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
export class AppModule {}
