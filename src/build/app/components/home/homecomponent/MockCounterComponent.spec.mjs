import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { Homecomponent } from './homecomponent.mjs';
import { CounterComponent } from '../../counter/counter-component.mjs';
describe('HomeComponent with ng-mocks', () => {
    let fixture;
    let component;
    let counter;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Homecomponent, MockComponent(CounterComponent)],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
        fixture = TestBed.createComponent(Homecomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        const counterEl = fixture.debugElement.query(By.directive(CounterComponent));
        counter = counterEl.componentInstance;
    });
    it('renders an independent counter', () => {
        expect(counter).toBeTruthy();
    });
    it('passes a start count', () => {
        expect(counter.startCount).toBe(5);
    });
    it('listens for count changes', () => {
        spyOn(console, 'log');
        const count = 5;
        counter.countChange.emit(count);
        expect(console.log).toHaveBeenCalledWith('countChange event from CounterComponent', count);
    });
});
//# sourceMappingURL=MockCounterComponent.spec.js.map
