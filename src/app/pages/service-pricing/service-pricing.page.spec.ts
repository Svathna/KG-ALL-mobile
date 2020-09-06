import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicePricingPage } from './service-pricing.page';

describe('ServicePricingPage', () => {
  let component: ServicePricingPage;
  let fixture: ComponentFixture<ServicePricingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePricingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePricingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
