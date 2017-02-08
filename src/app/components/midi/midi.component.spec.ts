/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import midiReducer, * as fromAccelerometer from 'app/reducers/midi';

import { MidiComponent } from '../midi';

describe('LogbrowserComponent', () => {
  let component: MidiComponent;
  let fixture: ComponentFixture<MidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MidiComponent],
      imports: [
        StoreModule.provideStore(
          {
            midi: midiReducer
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
