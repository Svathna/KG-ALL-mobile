import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardScannerPage } from './guard-scanner.page';

describe('GuardScannerPage', () => {
  let component: GuardScannerPage;
  let fixture: ComponentFixture<GuardScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardScannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
