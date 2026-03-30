import { TestBed } from '@angular/core/testing';

import { JobStoreService } from './job-store.service';

describe('JobStoreService', () => {
  let service: JobStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
