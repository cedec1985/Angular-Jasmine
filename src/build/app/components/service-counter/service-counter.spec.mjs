import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServiceCounterComponent } from './service-counter.js';
import { CounterService } from '../../services/counter-service.js';
describe('ServiceCounterComponent', () => {
    let component;
    let fixture;
    let counterServiceSpy;
    beforeEach(async () => {
        const spy = jasmine.createSpyObj('CounterService', ['getCount', 'increment', 'decrement', 'reset']);
        await TestBed.configureTestingModule({
            declarations: [ServiceCounterComponent],
            providers: [
                { provide: CounterService, useValue: spy }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(ServiceCounterComponent);
        component = fixture.componentInstance;
        counterServiceSpy = TestBed.inject(CounterService);
        // Fake observable response
        const fakeState = 0;
        counterServiceSpy.getCount.and.returnValue(of(fakeState));
        fixture.detectChanges(); // Triggers ngOnInit
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should call increment on the service', () => {
        component.increment();
        expect(counterServiceSpy.increment).toHaveBeenCalled();
    });
    it('should call decrement on the service', () => {
        component.decrement();
        expect(counterServiceSpy.decrement).toHaveBeenCalled();
    });
    it('should call reset with valid number', () => {
        component.reset('5');
        expect(counterServiceSpy.reset).toHaveBeenCalledWith(5);
    });
    it('should not call reset with invalid number', () => {
        component.reset('abc');
        expect(counterServiceSpy.reset).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=service-counter.spec.js.map
