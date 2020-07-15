import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

export const MONTHS = [
  'មករា',
  'កុម្ភៈ',
  'មីនា',
  'មេសា',
  'ឧសភា',
  'មិថុនា',
  'កក្កដា',
  'សីហា',
  'កញ្ញា',
  'តុលា',
  'វិច្ឆិកា',
  'ធ្នូ',
];

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.page.html',
  styleUrls: ['./obligation.page.scss'],
})
export class ObligationPage {
  arrayMonths = MONTHS;
  currentDate = new Date();
  isFetching = false;

  constructor(
    private navCtr: NavController,
  ) {}
}
