/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellDonateComponent } from './sell-donate.component';

describe('SellDonateComponent', () => {
  let component: SellDonateComponent;
  let fixture: ComponentFixture<SellDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
