import { TestBed } from '@angular/core/testing';

import { HardCodedAutheticationService } from './hard-coded-authetication.service';

describe('HardCodedAutheticationService', () => {
  let service: HardCodedAutheticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAutheticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
