import { TestBed } from '@angular/core/testing';
import { CounterApiService } from './counter-api-service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

describe('CounterApiService', () => {
  let service: CounterApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],       //déprécié
      providers: [CounterApiService, provideHttpClientTesting]
    });

    service = TestBed.inject(CounterApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the correct URL with the given counter', () => {
    const counterValue = 10;

    service.saveCounter(counterValue).subscribe();

    const req = httpMock.expectOne(`/assets/counter.json?counter=${counterValue}`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Simule une réponse vide
  });
});
