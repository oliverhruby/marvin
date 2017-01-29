import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from 'app/reducers';
import { CommandState } from 'app/reducers/command';
import { SpeechSynthesisService } from 'app/services';
import { WitAiService } from 'app/services';

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
    private witAiService: WitAiService,
    private speechSynthesisService: SpeechSynthesisService
  ) {

  }

  ngOnInit() {
    this.voices = this.speechSynthesisService.getVoices();
    
    // subscribe to commands, retrieve response from wit.ai and speak it
    this.store.select<CommandState>('command').subscribe((data) => 
        this.witAiService.getResponse(data.command).subscribe(
          (data) => this.speechSynthesisService.speak(data)
        )
    );
  }

  submit() {
    this.store.dispatch({type: 'COMMAND_SEND', payload: this.text });
  }
}
