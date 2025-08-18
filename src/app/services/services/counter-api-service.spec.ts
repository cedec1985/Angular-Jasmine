import { TestBed } from '@angular/core/testing';
import { CounterApiService } from '../services/counter-api-service.js';

describe('CounterApiService', () => {
  let service: CounterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
