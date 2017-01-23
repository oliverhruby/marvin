/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeechRecognitionService } from '../services';

describe('SpeechRecognitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechRecognitionService]
    });
  });

  it('should ...', inject([SpeechRecognitionService], (service: SpeechRecognitionService) => {
    expect(service).toBeTruthy();
  }));
});
