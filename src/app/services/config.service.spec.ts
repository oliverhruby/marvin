/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ConfigService]
    });
  });

  it('should retrieve response', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
