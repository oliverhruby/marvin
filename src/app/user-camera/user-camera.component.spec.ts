/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserCameraComponent } from '../user-camera';

describe('UserCameraComponent', () => {
  let component: UserCameraComponent;
  let fixture: ComponentFixture<UserCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserCameraComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
