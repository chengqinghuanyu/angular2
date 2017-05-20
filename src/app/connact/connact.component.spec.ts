/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConnactComponent } from './connact.component';

describe('ConnactComponent', () => {
  let component: ConnactComponent;
  let fixture: ComponentFixture<ConnactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
