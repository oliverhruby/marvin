/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// state management
import counterReducer, * as fromCounter from 'app/reducers/counter';

import { LogBrowserComponent } from '../logbrowser';

describe('LogbrowserComponent', () => {
  let component: LogBrowserComponent;
  let fixture: ComponentFixture<LogBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogBrowserComponent],
      imports: [
        StoreModule.provideStore(
          {
            counter: counterReducer
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
