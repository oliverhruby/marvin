/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MosquittoComponent } from '../mosquitto';

describe('LogbrowserComponent', () => {
  let component: MosquittoComponent;
  let fixture: ComponentFixture<MosquittoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MosquittoComponent],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosquittoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
