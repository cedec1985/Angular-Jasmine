import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCounterLoading } from '../../reducers/counter-reducer/selectors.js';
import { increment } from '../../actions/counter-actions.js';
let CounterComponent = class CounterComponent {
    constructor() {
        this.startCount = 0;
        this.countChange = new EventEmitter();
        this.count = 0;
        this.store = inject(Store);
        this.counter$ = this.store.select(selectCounterLoading);
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
    ngOnInit() {
        this.store.dispatch(increment());
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
        imports: [RouterOutlet, AsyncPipe],
        templateUrl: './counter-component.html',
        styleUrl: './counter-component.css'
    })
], CounterComponent);
export { CounterComponent };
//# sourceMappingURL=counter-component.js.map
