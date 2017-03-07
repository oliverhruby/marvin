import { Injectable } from '@angular/core';

/**
 * Service for speech synthesis
 */
@Injectable()
export class SpeechService {

  constructor() {
    let final_transcript = '';
    let recognizing = false;
    let recognition = null;

    try {

      // TODO: fix this - fails to compile saying SpeechRecognition undefined
      // this.speechRecognition = SpeechRecognition || webkitSpeechRecognition
      recognition = new webkitSpeechRecognition;

      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = function () {
        recognizing = true;
      };

      recognition.onerror = function (event) {
        console.error(event.error);
      };

      recognition.onend = function () {
        recognizing = false;
      };

      recognition.onresult = function (event) {
        let interim_transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
      };

    } catch (ex) {
      console.error('Speech recognition not available');
    }

  }

}
