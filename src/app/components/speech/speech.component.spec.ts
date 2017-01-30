/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import commandReducer, * as fromCommand from 'app/reducers/command';

import { SpeechSynthesisService } from 'app/services';
import { WitAiService } from 'app/services';
import { SpeechComponent } from '../speech';

describe('SpeechComponent', () => {
  let component: SpeechComponent;
  let fixture: ComponentFixture<SpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SpeechSynthesisService, WitAiService
      ],
      declarations: [SpeechComponent],
      imports: [
        FormsModule,
        JsonpModule,
        StoreModule.provideStore(
          {
            command: commandReducer
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
