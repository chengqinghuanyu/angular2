/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConunationnewComponent } from './conunationnew.component';

describe('ConunationnewComponent', () => {
  let component: ConunationnewComponent;
  let fixture: ComponentFixture<ConunationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConunationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConunationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
