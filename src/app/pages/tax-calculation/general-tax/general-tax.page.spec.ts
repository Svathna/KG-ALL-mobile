import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralTaxPage } from './general-tax.page';

describe('GeneralTaxPage', () => {
  let component: GeneralTaxPage;
  let fixture: ComponentFixture<GeneralTaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralTaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
