import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DocumentInventoryPage } from './document-inventory.page';

describe('DocumentInventoryPage', () => {
  let component: DocumentInventoryPage;
  let fixture: ComponentFixture<DocumentInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
