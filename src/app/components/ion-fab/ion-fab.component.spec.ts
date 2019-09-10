import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonFabComponent } from './ion-fab.component';

describe('IonFabComponent', () => {
  let component: IonFabComponent;
  let fixture: ComponentFixture<IonFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonFabComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
