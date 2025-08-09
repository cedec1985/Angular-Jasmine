import { TestBed } from '@angular/core/testing';
import { CounterService } from './counter-service.js';
describe('CounterService', () => {
    // @ts-ignore
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CounterService);
    });
    it('should be created', () => {
        // @ts-ignore
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=counter-service.spec.js.map
