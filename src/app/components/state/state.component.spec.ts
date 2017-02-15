/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

// state management
import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
import batteryReducer, * as fromBattery from 'app/reducers/battery';
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { StateComponent } from '../state';

describe('StateComponent', () => {
  let component: StateComponent;
  let fixture: ComponentFixture<StateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StateComponent],
      imports: [HttpModule,
        StoreModule.provideStore(
          {
            gyroscope: gyroscopeReducer,
            battery: batteryReducer,
            counter: counterReducer,
          }
        )
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: fix testing with setInterval
  // it('should have the proper content', async(() => {
  //   let fixture = TestBed.createComponent(StatsComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div').textContent).toContain('works!');
  // }));

});
