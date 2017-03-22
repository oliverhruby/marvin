/* tslint:disable:no-unused-variable */
import { HttpModule, JsonpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SysinfoComponent } from 'app/components/sysinfo.component';
import userReducer, * as fromUser from 'app/reducers/user';

import {
  ApiService,
  AuthService
} from 'app/services';

import {
  HomeComponent,
  ScenesComponent,
  SplashComponent,
  SysinfoComponent,
  UserComponent
} from 'app/components';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ScenesComponent,
        SplashComponent,
        SysinfoComponent,
        UserComponent
      ],
      imports: [
        HttpModule, JsonpModule,
        StoreModule.provideStore(
          {
            user: userReducer
          }
        )
      ],
      providers: [
        AuthService,
        ApiService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
