import { __decorate } from "tslib";
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Homecomponent } from './homecomponent.js';
let FakeCounterComponent = class FakeCounterComponent {
    constructor() {
        this.startCount = 0;
        this.countChange = new EventEmitter();
    }
};
__decorate([
    Input()
], FakeCounterComponent.prototype, "startCount", void 0);
__decorate([
    Output()
], FakeCounterComponent.prototype, "countChange", void 0);
FakeCounterComponent = __decorate([
    Component({
        selector: 'app-counter',
        template: '',
    })
], FakeCounterComponent);
describe('HomeComponent (faking a child Component)', () => {
    let fixture;
    let component;
    let counter;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Homecomponent, FakeCounterComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
        fixture = TestBed.createComponent(Homecomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        const counterEl = fixture.debugElement.query(By.directive(FakeCounterComponent));
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
//# sourceMappingURL=fakeChildCounterComponent.spec.js.map
