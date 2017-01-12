/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { MotorSoundService } from './motorsound.service';

describe('MotorSoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MotorSoundService]
    });
  });

  it('should ...', inject([MotorSoundService], (service: MotorSoundService) => {
    expect(service).toBeTruthy();
  }));
});
