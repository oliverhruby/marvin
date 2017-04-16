import { Injectable } from '@angular/core';

@Injectable()
export class SpeechSynthesisService {

  private speech: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[];

  constructor() {
    try {
      // retrieve the speech synthesis provider
      this.speech = speechSynthesis;
      this.voices = this.speech.getVoices();
    } catch (ex) {
      console.warn('Speech synthesis not available');
    }
  }

  getVoices() {
    return this.voices;
  }

  speak(text: string) {

      let msg = new SpeechSynthesisUtterance();
      msg.voice = this.voices[0];
      msg.rate = 1;
      msg.pitch = 1;
      msg.volume = 1;
      msg.text = text;

      this.speech.speak(msg);

  }

}
