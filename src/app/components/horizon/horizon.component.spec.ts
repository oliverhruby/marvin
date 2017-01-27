/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mainStoreReducer } from 'app/state-management/reducers/main-reducer';
import { HorizonComponent } from '../horizon';

describe('HorizonComponent', () => {
  let component: HorizonComponent;
  let fixture: ComponentFixture<HorizonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HorizonComponent],
      imports: [StoreModule.provideStore({ mainStoreReducer })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
