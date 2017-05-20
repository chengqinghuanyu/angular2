/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConunationComponent } from './conunation.component';

describe('ConunationComponent', () => {
  let component: ConunationComponent;
  let fixture: ComponentFixture<ConunationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConunationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConunationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
