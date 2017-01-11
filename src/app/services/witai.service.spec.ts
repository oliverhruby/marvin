/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { WitAiService } from './witai.service';

describe('WitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [WitAiService]
    });
  });

  it('should ...', inject([WitAiService], (service: WitAiService) => {
    expect(service).toBeTruthy();
  }));
});
