import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let CounterComponent = class CounterComponent {
    constructor() {
        this.startCount = 0;
        this.countChange = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges() {
        this.count = this.startCount;
    }
    increment() {
        this.count++;
        this.countChange.emit(this.count);
        this.notify();
    }
    decrement() {
        this.count--;
        this.countChange.emit(this.count);
        this.notify();
    }
    reset() {
        const count = parseInt(this.startCount.toString(), 10);
        this.countChange.emit(this.count);
        if (!Number.isNaN(count)) {
            this.count = count;
            this.notify();
        }
    }
    notify() {
        this.countChange.emit(this.count);
    }
};
__decorate([
    Input()
], CounterComponent.prototype, "startCount", void 0);
__decorate([
    Output()
], CounterComponent.prototype, "countChange", void 0);
CounterComponent = __decorate([
    Component({
        selector: 'app-counter-component',
        imports: [],
        templateUrl: './counter-component.html',
        styleUrl: './counter-component.css'
    })
], CounterComponent);
export { CounterComponent };
//# sourceMappingURL=counter-component.js.map