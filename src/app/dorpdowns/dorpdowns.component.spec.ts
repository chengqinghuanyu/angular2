/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DorpdownsComponent } from './dorpdowns.component';

describe('DorpdownsComponent', () => {
  let component: DorpdownsComponent;
  let fixture: ComponentFixture<DorpdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DorpdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DorpdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
