import { Injectable } from '@angular/core';

@Injectable()
export class SpeechSynthesisService {

  private speech: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[];

  constructor() {
    if (speechSynthesis) {
      // retrieve the speech synthesis provider
      this.speech = speechSynthesis;
      this.voices = this.speech.getVoices();
    }
  }

  getVoices() {
    return this.speech.getVoices();
  }

  speak(text: string) {

      var msg = new SpeechSynthesisUtterance();
      msg.voice = this.voices[0];
      msg.rate = 1;
      msg.pitch = 1;
      msg.volume = 1;
      msg.text = text;

      this.speech.speak(msg);

  }

}
