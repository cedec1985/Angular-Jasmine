import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter-component';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { increment } from '../../actions/counter-actions';
import { selectCounterLoading } from '../../reducers/counter-reducer/selectors';
import { of } from 'rxjs';
describe('CounterComponent', () => {
    // @ts-ignore
    let component;
    let fixture;
    // @ts-ignore
    let store;
    const initialState = {};
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
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
        store = TestBed.inject(Store);
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create the component', () => {
        // @ts-ignore
        expect(component).toBeTruthy();
    });
    it('should initialize count from startCount in ngOnChanges', () => {
        // @ts-ignore
        component.startCount = 5;
        // @ts-ignore
        component.ngOnChanges();
        // @ts-ignore
        expect(component.count).toBe(5);
    });
    it('should increment the count and emit the value', () => {
        // @ts-ignore
        spyOn(component.countChange, 'emit');
        // @ts-ignore
        component.count = 1;
        // @ts-ignore
        component.increment();
        // @ts-ignore
        expect(component.count).toBe(2);
        // @ts-ignore
        expect(component.countChange.emit).toHaveBeenCalledWith(2);
    });
    it('should decrement the count and emit the value', () => {
        // @ts-ignore
        spyOn(component.countChange, 'emit');
        // @ts-ignore
        component.count = 3;
        // @ts-ignore
        component.decrement();
        // @ts-ignore
        expect(component.count).toBe(2);
        // @ts-ignore
        expect(component.countChange.emit).toHaveBeenCalledWith(2);
    });
    it('should reset the count and emit the value', () => {
        // @ts-ignore
        spyOn(component.countChange, 'emit');
        // @ts-ignore
        component.startCount = 10;
        // @ts-ignore
        component.count = 5;
        // @ts-ignore
        component.reset();
        // @ts-ignore
        expect(component.count).toBe(10);
        // @ts-ignore
        expect(component.countChange.emit).toHaveBeenCalledWith(10);
    });
    it('should emit count twice in increment (once in increment, once in notify)', () => {
        // @ts-ignore
        const emitSpy = spyOn(component.countChange, 'emit');
        // @ts-ignore
        component.count = 4;
        // @ts-ignore
        component.increment();
        expect(emitSpy).toHaveBeenCalledTimes(2);
        expect(emitSpy).toHaveBeenCalledWith(5);
    });
    it('should dispatch increment on ngOnInit', () => {
        // @ts-ignore
        const dispatchSpy = spyOn(store, 'dispatch');
        // @ts-ignore
        component.ngOnInit();
        expect(dispatchSpy).toHaveBeenCalledWith(increment());
    });
});
//# sourceMappingURL=counter-component.spec.js.map
