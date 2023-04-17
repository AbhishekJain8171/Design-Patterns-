import { TestBed } from '@angular/core/testing';

import { DataPickerServiceTsService } from './data-picker-service.ts.service';

describe('DataPickerServiceTsService', () => {
  let service: DataPickerServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPickerServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
