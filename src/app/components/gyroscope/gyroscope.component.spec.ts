/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { GyroscopeComponent } from '../gyroscope';

describe('GyroscopeComponent', () => {
  let component: GyroscopeComponent;
  let fixture: ComponentFixture<GyroscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GyroscopeComponent],
      imports: [
        StoreModule.provideStore(
          {
            gyroscope: gyroscopeReducer,
            battery: batteryReducer,
            counter: counterReducer,
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
