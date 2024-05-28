import { TestBed } from '@angular/core/testing';

import { LogService2Service } from './log-service2.service';

describe('LogService2Service', () => {
  let service: LogService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
