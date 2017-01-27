/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mainStoreReducer } from 'app/state-management/reducers/main-reducer';
import { BatteryService } from 'app/services';
import { BatteryComponent } from '../battery';

describe('BatteryComponent', () => {
  let component: BatteryComponent;
  let fixture: ComponentFixture<BatteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatteryComponent],
      imports: [StoreModule.provideStore({ mainStoreReducer })],
      providers: [BatteryService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
