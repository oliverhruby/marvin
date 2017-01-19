import { Injectable } from '@angular/core';

/**
 * Service for speech synthesis
 */
@Injectable()
export class SpeechService {

  speechRecognition : any;
  speechGrammarList : any;
  speechRecognitionEvent : any;

  constructor() {
    //TODO: fix this - fails to compile saying SpeechRecognition undefined
    //this.speechRecognition = SpeechRecognition || webkitSpeechRecognition
    //this.speechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    //this.speechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
    this.speechRecognition = webkitSpeechRecognition;
    this.speechGrammarList = webkitSpeechGrammarList;
    this.speechRecognitionEvent = webkitSpeechRecognitionEvent;
  }

}
