/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConmunacationnewComponent } from './conmunacationnew.component';

describe('ConmunacationnewComponent', () => {
  let component: ConmunacationnewComponent;
  let fixture: ComponentFixture<ConmunacationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConmunacationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConmunacationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
