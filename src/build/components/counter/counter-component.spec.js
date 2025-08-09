import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { take, toArray } from 'rxjs/operators';
import { click, expectText, setFieldValue } from '../../spec.helpers.component.js';
import { CounterComponent } from './counter-component.js';
const startCount = 123;
const newCount = 456;
describe('CounterComponent', () => {
    // @ts-ignore
    let component;
    // @ts-ignore
    let fixture;
    // @ts-ignore
    function expectCount(count) {
        // @ts-ignore
        expectText(fixture, 'count', count.toString());
    }
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        // @ts-ignore
        fixture.autoDetectChanges(); // Enable auto-detection
        yield TestBed.configureTestingModule({
            imports: [CounterComponent],
            declarations: [CounterComponent],
        })
            .compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;
        component.startCount = startCount;
        component.ngOnChanges();
        fixture.detectChanges();
    }));
    it('shows the start count', () => {
        expectCount(startCount);
    });
    it('increments the count', () => {
        // @ts-ignore
        click(fixture, 'increment-button');
        expectCount(startCount + 1);
    });
    it('decrements the count', () => {
        // @ts-ignore
        click(fixture, 'decrement-button');
        expectCount(startCount - 1);
    });
    it('resets the count', () => {
        // @ts-ignore
        setFieldValue(fixture, 'reset-input', newCount.toString());
        // @ts-ignore
        click(fixture, 'reset-button');
        expectCount(newCount);
    });
    it('does not reset if the value is not a number', () => {
        const value = 'not a number';
        // @ts-ignore
        setFieldValue(fixture, 'reset-input', value);
        // @ts-ignore
        click(fixture, 'reset-button');
        expectCount(startCount);
    });
    it('emits countChanges events', () => {
        let actualCounts;
        // @ts-ignore
        component.countChange.pipe(take(3), toArray()).subscribe(counts => actualCounts = counts);
        // @ts-ignore
        click(fixture, 'increment-button');
        // @ts-ignore
        click(fixture, 'decrement-button');
        // @ts-ignore
        setFieldValue(fixture, 'reset-input', newCount.toString());
        // @ts-ignore
        click(fixture, 'reset-button');
        // @ts-ignore
        expect(actualCounts).toEqual([startCount + 1, startCount - 1, newCount]);
    });
});
//# sourceMappingURL=counter-component.spec.js.map
