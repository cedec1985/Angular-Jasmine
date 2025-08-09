import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CounterService = class CounterService {
    constructor() {
        // Technically, this property is not necessary since the BehaviorSubject
        // below already holds the current count. We are keeping it for clarity.
        this.count = 0;
        this.subject = new BehaviorSubject(this.count);
    }
    // Every BehaviorSubject is an Observable and Observer.
    // We do not want to expose the Observer trait to the outside,
    // so we downcast the BehaviorSubject to a simple Observable only.
    getCount() {
        return this.subject.asObservable();
    }
    increment() {
        this.count++;
        this.notify();
    }
    decrement() {
        this.count--;
        this.notify();
    }
    /**
   * @param {number} newCount
   */
    reset(newCount) {
        this.count = newCount;
        this.notify();
    }
    notify() {
        this.subject.next(this.count);
    }
};
CounterService = __decorate([
    Injectable()
], CounterService);
export { CounterService };
//# sourceMappingURL=counter-service.js.map
