import { TestBed } from '@angular/core/testing';

import { PrintDynamicMessagesService } from './print-dynamic-messages.service';

describe('PrintDynamicMessagesService', () => {
  let service: PrintDynamicMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintDynamicMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
