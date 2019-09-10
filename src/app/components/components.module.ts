import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { IonFabComponent } from "../components/ion-fab/ion-fab.component";
@NgModule({
  declarations: [IonFabComponent],
  exports: [IonFabComponent],
  imports: [IonicModule]
})
export class ComponentsModule {}
