import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaryTaxPage } from './salary-tax.page';

describe('SalaryTaxPage', () => {
  let component: SalaryTaxPage;
  let fixture: ComponentFixture<SalaryTaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryTaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaryTaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
