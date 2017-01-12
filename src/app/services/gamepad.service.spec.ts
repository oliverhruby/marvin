/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { GamepadService } from './gamepad.service';

describe('GamepadService', () => {

  let service: GamepadService;

  beforeEach(() => {
    service = new GamepadService();
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
