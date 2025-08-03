import { ComponentFixture, TestBed } from '@angular/core/testing';
import { take, toArray } from 'rxjs/operators';
import { CounterComponent } from './counter-component';
import { click, expectText, setFieldValue } from 'ng-test-utils';

const startCount = 123;
const newCount = 456;

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

function expectCount(count: number): void {
  expectText(fixture, 'count', count.toString());
}

  beforeEach(async () => {
   fixture.autoDetectChanges();                   // Enable auto-detection
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
      declarations: [CounterComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.startCount = startCount;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('shows the start count', () => {
    expectCount(startCount);
  });
  it('increments the count', () => {
    click(fixture, 'increment-button');
    expectCount(startCount + 1);
  });
  it('decrements the count', () => {
    click(fixture, 'decrement-button');
    expectCount(startCount - 1);
  });
  it('resets the count', () => {
    setFieldValue(fixture, 'reset-input', newCount.toString());
    click(fixture, 'reset-button');
    expectCount(newCount);
  });
  it('does not reset if the value is not a number', () => {
    const value = 'not a number';
    setFieldValue(fixture, 'reset-input', value);
    click(fixture, 'reset-button');
    expectCount(startCount);
    });
  it('emits countChanges events', () => {
    let actualCounts: number[] | undefined;
    component.countChange.pipe(take(3), toArray()).subscribe(counts => actualCounts = counts);

    click(fixture, 'increment-button');
    click(fixture, 'decrement-button');
    setFieldValue(fixture, 'reset-input', newCount.toString());
    click(fixture, 'reset-button');
    expect(actualCounts).toEqual([startCount + 1, startCount - 1, newCount]);
  });
});

