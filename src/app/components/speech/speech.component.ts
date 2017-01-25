import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisService } from '../../services';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  public voices : SpeechSynthesisVoice[];

  constructor(private speechSynthesisService: SpeechSynthesisService) {

  }

  ngOnInit() {
    this.voices = this.speechSynthesisService.getVoices();
  }

}
