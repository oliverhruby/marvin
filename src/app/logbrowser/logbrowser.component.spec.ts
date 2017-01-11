/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogBrowserComponent } from './logbrowser.component';

describe('LogbrowserComponent', () => {
  let component: LogBrowserComponent;
  let fixture: ComponentFixture<LogBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogBrowserComponent]
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
