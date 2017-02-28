/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import stopwatchReducer, * as fromStopwatch from 'app/reducers/stopwatch';
import { StopwatchService } from './stopwatch.service';

describe('StopwatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopwatchService],
      imports: [
        StoreModule.provideStore(
          {
            stopwatch: stopwatchReducer
          }
        )
      ]
    });
  });

  it('should start stop', inject([StopwatchService], (service: StopwatchService) => {
    expect(service).toBeTruthy();
    service.reset();
    service.start();
    service.stop();
  }));
});
