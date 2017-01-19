import { Injectable } from '@angular/core';

/**
 * Service for speech synthesis
 */
@Injectable()
export class SpeechService {

  constructor() {
    let final_transcript = '';
    let recognizing = false;

    // TODO: fix this - fails to compile saying SpeechRecognition undefined
    // this.speechRecognition = SpeechRecognition || webkitSpeechRecognition
    let recognition = new webkitSpeechRecognition;

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
    };

    recognition.onerror = function (event) {
      console.log(event.error);
    };

    recognition.onend = function () {
      recognizing = false;
    };

    recognition.onresult = function (event) {
      var interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
    };

  }

}
