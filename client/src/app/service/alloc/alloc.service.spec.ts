import { TestBed } from '@angular/core/testing';

import { AllocService } from './alloc.service';

describe('AllocService', () => {
  let service: AllocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
