import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.page.html',
  styleUrls: ['./obligation.page.scss'],
})
export class ObligationPage implements OnInit {

  constructor(
    private navCtr: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  backHome() {
    console.log('ha')
    this.navCtr.navigateBack("home");
  }

}
