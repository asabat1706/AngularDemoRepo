import { TestBed } from '@angular/core/testing';

import { LogService1Service } from './log-service1.service';

describe('LogService1Service', () => {
  let service: LogService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
