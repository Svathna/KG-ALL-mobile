import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxCalculationPage } from './tax-calculation.page';

describe('TaxCalculationPage', () => {
  let component: TaxCalculationPage;
  let fixture: ComponentFixture<TaxCalculationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCalculationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxCalculationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
