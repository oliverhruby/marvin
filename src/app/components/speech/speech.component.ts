import { Component, OnInit, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { WidgetComponent } from '../widget/widget.component';
import { State } from 'app/reducers';
import { CommandState } from 'app/reducers/command';
import { SpeechSynthesisService } from 'app/services';
import { WitAiService } from 'app/services';
import { HTML5SpeechEngine } from 'app/services/nativespeechengine';
import * as logger from 'winston';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent extends WidgetComponent implements OnInit {

  text: string;
  voices: SpeechSynthesisVoice[];

  constructor(
    private zone: NgZone,
    private store: Store<State>,
    private witAiService: WitAiService,
    private speechSynthesisService: SpeechSynthesisService
  ) {
    super();
  }

  ngOnInit() {
    let me = this;

    try {
      let engine = new HTML5SpeechEngine(this.zone);
      engine.toggle();
      engine.toRx().values.subscribe(message =>
        this.store.dispatch({ type: message.type == 'hint' ? 'COMMAND_TAG' : 'COMMAND_SEND', payload: message.value })
      );
    } catch (ex) {
      logger.info('Speech engine not available.');
    }

    // subscribe to commands, retrieve response from wit.ai and speak it
    this.store.select<CommandState>('command').subscribe(data => {
      if (data.command.length > 0) {
        // this.witAiService.getResponse(data.command).subscribe(data => {
        //   this.speechSynthesisService.speak(data);
        // })
      }
    });
  }

  submit() {
    this.store.dispatch({ type: 'COMMAND_SEND', payload: this.text });
  }
}
