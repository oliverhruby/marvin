/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import accelerometerReducer, * as fromAccelerometer from 'app/reducers/accelerometer';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { SpeechSynthesisService } from 'app/services';
import { SpeechComponent } from '../speech';

describe('SpeechComponent', () => {
  let component: SpeechComponent;
  let fixture: ComponentFixture<SpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SpeechSynthesisService],
      declarations: [SpeechComponent],
      imports: [
        FormsModule,
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
    fixture = TestBed.createComponent(SpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
