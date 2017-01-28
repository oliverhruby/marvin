/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import accelerometerReducer, * as fromAccelerometer from 'app/reducers/accelerometer';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { StopwatchComponent } from '../stopwatch';

describe('StopwatchComponent', () => {
  let component: StopwatchComponent;
  let fixture: ComponentFixture<StopwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StopwatchComponent],
      imports: [
        StoreModule.provideStore(
          {
            accelerometer: accelerometerReducer,
            battery: batteryReducer,
            counter: counterReducer,
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
