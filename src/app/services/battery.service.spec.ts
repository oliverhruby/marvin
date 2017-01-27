/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { mainStoreReducer } from 'app/state-management/reducers/main-reducer';
import { BatteryService } from '../services';

describe('BatteryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatteryService],
      imports: [StoreModule.provideStore({ mainStoreReducer })]
    });
  });

  it('should initialize', inject([BatteryService], (service: BatteryService) => {
    expect(service).toBeTruthy();
  }));
});
