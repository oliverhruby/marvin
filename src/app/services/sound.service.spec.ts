/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { SoundService } from './sound.service';

describe('SoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [SoundService]
    });
  });

  it('should work', inject([SoundService], (service: SoundService) => {
    expect(service).toBeTruthy();
    service.beep(1, 50);
  }));
});
