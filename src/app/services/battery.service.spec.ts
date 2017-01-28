/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import accelerometerReducer, * as fromAccelerometer from 'app/reducers/accelerometer';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { BatteryService } from '../services';

describe('BatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService],
      imports: [
        StoreModule.provideStore(
          {
            accelerometer: accelerometerReducer,
            battery: batteryReducer,
            counter: counterReducer,
          }
        )
      ]
    });
  });

  it('should initialize', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
