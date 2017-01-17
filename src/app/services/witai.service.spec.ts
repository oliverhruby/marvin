/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonpModule } from '@angular/http';
import { WitAiService } from './witai.service';

describe('WitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [WitAiService]
    });
  });

  it('should retrieve response', inject([WitAiService], (service: WitAiService) => {
    expect(service).toBeTruthy();
    service.getResponse("test");
  }));
});
