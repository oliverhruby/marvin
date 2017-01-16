/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';

// providers
import {
  WebSocketService,
  GamepadService,
  SoundService
} from './services';

// components
import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { StatsComponent } from './stats/stats.component';
import { HorizonComponent } from './horizon/horizon.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SceneComponent,
        StatsComponent,
        HorizonComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
      ],
      providers: [
        WebSocketService,
        GamepadService,
        SoundService
      ]
    });
    TestBed.compileComponents();
  });

  // it('should create the app', async(() => {
  //    let fixture = TestBed.createComponent(AppComponent);
  //    let app = fixture.debugElement.componentInstance;
  //    expect(app).toBeTruthy();
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div').textContent).toContain('works!');
  // }));
});
