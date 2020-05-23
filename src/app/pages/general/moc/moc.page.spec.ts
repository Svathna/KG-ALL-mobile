import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MocPage } from './moc.page';

describe('MocPage', () => {
  let component: MocPage;
  let fixture: ComponentFixture<MocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
