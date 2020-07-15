import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxPerYearsPage } from './tax-per-years.page';

describe('TaxPerYearsPage', () => {
  let component: TaxPerYearsPage;
  let fixture: ComponentFixture<TaxPerYearsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPerYearsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxPerYearsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
