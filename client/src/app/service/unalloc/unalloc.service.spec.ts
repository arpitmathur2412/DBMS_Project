import { TestBed } from '@angular/core/testing';

import { UnallocService } from './unalloc.service';

describe('UnallocService', () => {
  let service: UnallocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnallocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
