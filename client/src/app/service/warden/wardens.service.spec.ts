import { TestBed } from '@angular/core/testing';

import { WardensService } from './wardens.service';

describe('WardensService', () => {
  let service: WardensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WardensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
