import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
    selector: "app-general",
    templateUrl: "./general.page.html",
    styleUrls: ["./general.page.scss"],
})
export class GeneralPage implements OnInit {
    constructor(public navCtrl: NavController) {}

    ngOnInit() {}
}
