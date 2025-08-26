import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter-component';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { increment } from '../../actions/counter-actions';
import { selectCounterLoading } from '../../reducers/counter-reducer/selectors';
import { of } from 'rxjs';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;
  const initialState = { };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [CounterComponent],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: selectCounterLoading, value: of(0) }
          ]
        })
      ]
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore;
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize count from startCount in ngOnChanges', () => {
    component.startCount = 5;
    component.ngOnChanges();
    expect(component.count).toBe(5);
  });

  it('should increment the count and emit the value', () => {
    spyOn(component.countChange, 'emit');
    component.count = 1;
    component.increment();
    expect(component.count).toBe(2);
    expect(component.countChange.emit).toHaveBeenCalledWith(2);
  });

  it('should decrement the count and emit the value', () => {
    spyOn(component.countChange, 'emit');
    component.count = 3;
    component.decrement();
    expect(component.count).toBe(2);
    expect(component.countChange.emit).toHaveBeenCalledWith(2);
  });

  it('should reset the count and emit the value', () => {
    spyOn(component.countChange, 'emit');
    component.startCount = 10;
    component.count = 5;
    component.reset();
    expect(component.count).toBe(10);
    expect(component.countChange.emit).toHaveBeenCalledWith(10);
  });

  it('should emit count twice in increment (once in increment, once in notify)', () => {
    const emitSpy = spyOn(component.countChange, 'emit');
    component.count = 4;
    component.increment();
    expect(emitSpy).toHaveBeenCalledTimes(2);
    expect(emitSpy).toHaveBeenCalledWith(5);
  });

  it('should dispatch increment on ngOnInit', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(increment());
  });
});
