/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BatteryService } from '../services';

describe('BatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService]
    });
  });

  it('should initialize', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
