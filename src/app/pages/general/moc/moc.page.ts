import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moc',
  templateUrl: './moc.page.html',
  styleUrls: ['./moc.page.scss'],
})
export class MocPage implements OnInit {

  constructor(
    private navCtr: NavController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  backHome() {
    console.log('ha')
    // this.navCtr.navigateBack("home");
    this.router.navigateByUrl("home");
  }

}
