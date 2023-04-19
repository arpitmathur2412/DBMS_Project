import { TestBed } from '@angular/core/testing';

import { WingService } from './wing.service';

describe('WingService', () => {
  let service: WingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
