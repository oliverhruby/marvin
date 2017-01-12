/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MotorSoundService } from './motorsound.service';

describe('MotorSoundService', () => {

  let service: MotorSoundService;

  beforeEach(() => {
    service = new MotorSoundService(new AudioContext());
  });

  it('should initialize, start and stop', () => {
    expect(service).toBeTruthy();
    service.setSpeed(1);
    service.setVolume(1);
    service.start();
    service.stop();
  });
});
