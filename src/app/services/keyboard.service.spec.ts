/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import keyboardReducer, * as fromKeyboard from 'app/reducers/keyboard';
import { KeyboardService } from '../services';

describe('KeyboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyboardService],
      imports: [
        StoreModule.provideStore(
          {
            keyboard: keyboardReducer
          }
        )
      ]
    });
  });

  it('should initialize', inject([KeyboardService], (service: KeyboardService) => {
    expect(service).toBeTruthy();
  }));
});
