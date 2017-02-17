/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import gamepadReducer, * as fromGamepad from 'app/reducers/gamepad';

import { GamepadComponent } from '../gamepad';

describe('GamepadComponent', () => {
  let component: GamepadComponent;
  let fixture: ComponentFixture<GamepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamepadComponent],
      imports: [
        StoreModule.provideStore(
          {
            gamepad: gamepadReducer
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update store on window events', () => {
    expect(component).toBeTruthy();
    let e1 = new Event('gamepadconnected');
    window.dispatchEvent(e1);
    let e2 = new Event('gamepaddisconnected');
    window.dispatchEvent(e2);
    let e3 = new Event('"gamepadchanged');
    window.dispatchEvent(e3);
  });
});
