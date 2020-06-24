import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestsPagePage } from './requests-page.page';

describe('RequestsPagePage', () => {
  let component: RequestsPagePage;
  let fixture: ComponentFixture<RequestsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
