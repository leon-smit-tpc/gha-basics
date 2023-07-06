import { TestBed } from '@angular/core/testing';

import { TabControlService } from './tab-control.service';

describe('TabControlService', () => {
  let service: TabControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
