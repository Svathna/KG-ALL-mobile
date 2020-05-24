import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
    selector: "app-tax-tap",
    templateUrl: "./tax-tap.page.html",
    styleUrls: ["./tax-tap.page.scss"],
})
export class TaxTapPage implements OnInit {
    constructor(private navCtr: NavController) {}

    ngOnInit() {}

    backHome() {
        console.log("ha");
        this.navCtr.navigateBack("home");
    }
}
