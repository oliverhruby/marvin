/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SysinfoComponent } from '../sysinfo';

describe('SysinfoComponent', () => {
  let component: SysinfoComponent;
  let fixture: ComponentFixture<SysinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysinfoComponent ],
      imports: [
        StoreModule.provideStore({
          
        })
      ],
      providers: []      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
