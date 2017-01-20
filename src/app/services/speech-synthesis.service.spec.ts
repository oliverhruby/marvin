/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeechSynthesisService } from '../services';

describe('SpeechSynthesisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechSynthesisService]
    });
  });

  it('should ...', inject([SpeechSynthesisService], (service: SpeechSynthesisService) => {
    expect(service).toBeTruthy();
  }));
});
