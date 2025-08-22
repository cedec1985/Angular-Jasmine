import { ComponentFixture, TestBed } from '@angular/core/testing';
import { take, toArray } from 'rxjs/operators';
import { click, expectText, setFieldValue } from '../../helpers/spec.helpers.component.js';
import { CounterComponent } from './counter-component.js';

const startCount = 123;
const newCount = 456;

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

function expectCount(count: number): void {
  expectText(fixture, 'count', count.toString());
}

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.startCount = startCount;
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('affiche le début du compteur', () => {
    expectCount(startCount);
  });
  it('incremente le compteur', () => {
    click(fixture, 'increment-button');
    fixture.detectChanges();
    expectCount(startCount + 1);
  });
  it('decremente le compteur', () => {
    click(fixture, 'decrement-button');
    fixture.detectChanges();
    expectCount(startCount - 1);
  });
  it('resete le compteur', () => {
    setFieldValue(fixture, 'reset-input', newCount.toString());
    click(fixture, 'reset-button');
    fixture.detectChanges();
    expectCount(newCount);
  });
  it('ne resete pas si la valeur n/est pas un nombre', () => {
    const value = 'not a number';
    setFieldValue(fixture, 'reset-input', value);
    click(fixture, 'reset-button');
    fixture.detectChanges();
    expectCount(startCount);
    });
  it('émet les événements', () => {
    let actualCounts: number[] | undefined;
    component.countChange.pipe(take(3), toArray()).subscribe(counts => actualCounts = counts);

    click(fixture, 'increment-button');
    click(fixture, 'decrement-button');
    setFieldValue(fixture, 'reset-input', newCount.toString());
    click(fixture, 'reset-button');
    expect(actualCounts).toEqual([startCount + 1, startCount - 1, newCount]);
  });
});

