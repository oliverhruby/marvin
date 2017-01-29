import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SpeechSynthesisService } from 'app/services';
import { State } from 'app/reducers';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  text: string;
  voices: SpeechSynthesisVoice[];

  constructor(
    private store: Store<State>,
    private speechSynthesisService: SpeechSynthesisService
  ) {

  }

  ngOnInit() {
    this.voices = this.speechSynthesisService.getVoices();
  }

  submit() {
    this.speechSynthesisService.speak(this.text);
  }

}
