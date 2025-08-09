// @ts-nocheck
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { take, toArray } from 'rxjs/operators';
import { click, expectText, setFieldValue } from '../../spec.helpers.component.js';
import { CounterComponent } from './counter-component.js';
import { DebugElement } from "@angular/core";

const startCount = 123;
const newCount = 456;

describe('CounterComponent', () => {
  /**
   * @type {import("@angular/core/testing").ComponentFixture<any>}
   */
    let fixture;
    /**
   * @type {import("@angular/core").DebugElement}
   */
    let component;
    let startCount;

    // Arrange
    /**
   * @param {number} count
   */
    function expectCount(count) {

        expectText(fixture, 'count', count.toString());
    }

    beforeEach(async() => {

   //     fixture.autoDetectChanges(); // Enable auto-detection
        TestBed.configureTestingModule({
            imports: [CounterComponent],
            declarations: [CounterComponent],
        })
            .compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        component = fixture.componentInstance;

        component.startCount = startCount;
        component.ngOnChanges();
        fixture.detectChanges();
    })

    it('shows the start count', () => {
        expectCount(startCount);
    });
    it('increments the count', () => {

        click(fixture, 'increment-button');
         fixture.detectChanges();
        expectCount(startCount + 1);
    });
    it('decrements the count', () => {

        click(fixture, 'decrement-button');
         fixture.detectChanges();
        expectCount(startCount - 1);
    });
    it('resets the count', () => {

        setFieldValue(fixture, 'reset-input', newCount.toString());

        click(fixture, 'reset-button');
         fixture.detectChanges();
        expectCount(newCount);
    });
    it('does not reset if the value is not a number', () => {
        const value = 'not a number';

        setFieldValue(fixture, 'reset-input', value);

        click(fixture, 'reset-button');
         fixture.detectChanges();
        expectCount(startCount);
    });
    it('emits countChanges events', () => {
        let actualCounts;

        component.countChange.pipe(take(3), toArray()).subscribe((/** @type {any} */ counts) => actualCounts = counts);

        click(fixture, 'increment-button');

        click(fixture, 'decrement-button');

        setFieldValue(fixture, 'reset-input', newCount.toString());

        click(fixture, 'reset-button');

        expect(actualCounts).toEqual([startCount + 1, startCount - 1, newCount]);
    })
    });
