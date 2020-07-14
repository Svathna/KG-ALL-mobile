import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxPerMonthsPage } from './tax-per-months.page';

describe('TaxPerMonthsPage', () => {
  let component: TaxPerMonthsPage;
  let fixture: ComponentFixture<TaxPerMonthsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPerMonthsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxPerMonthsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
