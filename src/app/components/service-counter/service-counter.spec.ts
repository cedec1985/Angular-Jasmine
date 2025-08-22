import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ServiceCounterComponent } from './service-counter.js';
import { CounterService } from 'src/app/services/counter-service.js';
import { CounterState } from 'src/app/reducers/counter-reducer/counter-reducer.js';

describe('ServiceCounterComponent', () => {
  let component: ServiceCounterComponent;
  let fixture: ComponentFixture<ServiceCounterComponent>;
  let counterServiceSpy: jasmine.SpyObj<CounterService>;

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
    counterServiceSpy = TestBed.inject(CounterService) as jasmine.SpyObj<CounterService>;

    // Fake observable response
    const fakeState: CounterState = 0 ;
    counterServiceSpy.getCount.and.returnValue(of(fakeState));
    fixture.detectChanges();                                  // Triggers ngOnInit
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
