import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxTapPage } from './tax-tap.page';

describe('TaxTapPage', () => {
  let component: TaxTapPage;
  let fixture: ComponentFixture<TaxTapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxTapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxTapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
