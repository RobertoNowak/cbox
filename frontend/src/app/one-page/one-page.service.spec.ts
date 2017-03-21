/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OnePageService } from './one-page.service';

describe('Service: OnePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnePageService]
    });
  });

  it('should ...', inject([OnePageService], (service: OnePageService) => {
    expect(service).toBeTruthy();
  }));
});
