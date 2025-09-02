import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CounterService = class CounterService {
    constructor() {
        this.count = 0;
        this.subject = new BehaviorSubject(this.count);
    }
    // Chaque BehaviorSubject est un Observable et un Observer.
    // Nous voulons ne pas exposer l'observable à l'extérieur
    // Nous transformons BehaviorSubject en un simple Observable.
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
