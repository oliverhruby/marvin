/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { MosquittoComponent } from '../mosquitto';

describe('LogbrowserComponent', () => {
  let component: MosquittoComponent;
  let fixture: ComponentFixture<MosquittoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MosquittoComponent],
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
    fixture = TestBed.createComponent(MosquittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
