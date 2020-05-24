import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObligationPage } from './obligation.page';

describe('ObligationPage', () => {
  let component: ObligationPage;
  let fixture: ComponentFixture<ObligationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObligationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObligationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
