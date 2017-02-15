/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { BatteryService } from 'app/services';
import { BatteryComponent } from '../battery';

describe('BatteryComponent', () => {
  let component: BatteryComponent;
  let fixture: ComponentFixture<BatteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatteryComponent],
      imports: [
        StoreModule.provideStore(
          {
            gyroscope: gyroscopeReducer,
            battery: batteryReducer,
            counter: counterReducer,
          }
        )
      ],
      providers: [BatteryService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
