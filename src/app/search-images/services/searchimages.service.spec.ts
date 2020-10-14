import { TestBed } from '@angular/core/testing';

import { SearchimagesService } from './searchimages.service';

describe('SearchimagesService', () => {
  let service: SearchimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
