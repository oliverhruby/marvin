/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
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
            gyroscope: gyroscopeReducer,
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
