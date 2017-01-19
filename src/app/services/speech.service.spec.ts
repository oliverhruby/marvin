/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeechService } from './speech.service';

describe('SpeechService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechService]
    });
  });

  it('should work', inject([SpeechService], (service: SpeechService) => {
    expect(service).toBeTruthy();
  }));
});
