import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter-component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { selectCounterLoading } from '../../reducers/counter-reducer/selectors';
import { increment } from '../../actions/counter-actions';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let store: MockStore;
  const initialState = { }; // Ajouter un état initial si nécessaire

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CounterComponent],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectCounterLoading,
              value: false, // ou true selon le test
            }
          ]
        }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should set count to startCount', () => {
      component.startCount = 5;
      component.ngOnChanges();
      expect(component.count).toBe(5);
    });
  });

  describe('increment', () => {
    it('should increment count and emit countChange', () => {
      spyOn(component.countChange, 'emit');
      component.count = 3;

      component.increment();

      expect(component.count).toBe(4);
      expect(component.countChange.emit).toHaveBeenCalledWith(4);
    });
  });

  describe('decrement', () => {
    it('should decrement count and emit countChange', () => {
      spyOn(component.countChange, 'emit');
      component.count = 5;

      component.decrement();

      expect(component.count).toBe(4);
      expect(component.countChange.emit).toHaveBeenCalledWith(4);
    });
  });

  describe('reset', () => {
    it('should reset count to startCount if valid number', () => {
      spyOn(component.countChange, 'emit');
      component.startCount = 10;
      component.count = 5;

      component.reset();

      expect(component.count).toBe(10);
      expect(component.countChange.emit).toHaveBeenCalledWith(10);
    });

    it('should not reset count if startCount is NaN', () => {
      spyOn(component.countChange, 'emit');
      component.startCount = NaN;
      component.count = 7;

      component.reset();

      expect(component.count).toBe(7);
      expect(component.countChange.emit).toHaveBeenCalledWith(7);
    });
  });

  describe('notify', () => {
    it('should emit current count', () => {
      spyOn(component.countChange, 'emit');
      component.count = 42;

      component.notify();

      expect(component.countChange.emit).toHaveBeenCalledWith(42);
    });
  });

  describe('ngOnInit', () => {
    it('should dispatch increment action', () => {
      const dispatchSpy = spyOn(store, 'dispatch');
      component.ngOnInit();
      expect(dispatchSpy).toHaveBeenCalledWith(increment());
    });
  });
});
