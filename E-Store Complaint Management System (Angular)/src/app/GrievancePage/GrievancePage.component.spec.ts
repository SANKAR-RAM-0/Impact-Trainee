/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrievancePageComponent } from './GrievancePage.component';

describe('GrievancePageComponent', () => {
  let component: GrievancePageComponent;
  let fixture: ComponentFixture<GrievancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrievancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrievancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
