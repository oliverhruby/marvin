/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import gyroscopeReducer, * as fromGyroscope from 'app/reducers/gyroscope';
import { GyroscopeComponent } from 'app/components';

describe('GyroscopeComponent', () => {
  let component: GyroscopeComponent;
  let fixture: ComponentFixture<GyroscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GyroscopeComponent],
      imports: [
        StoreModule.provideStore(
          {
            gyroscope: gyroscopeReducer
          }
        )
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
