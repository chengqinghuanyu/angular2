/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrowserService } from './browser.service';

describe('BrowserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserService]
    });
  });

  it('should ...', inject([BrowserService], (service: BrowserService) => {
    expect(service).toBeTruthy();
  }));
});
