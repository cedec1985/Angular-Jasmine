import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ServiceCounterComponent = class ServiceCounterComponent {
    constructor(counterService) {
        this.counterService = counterService;
        this.count$ = this.counterService.getCount();
    }
    increment() {
        this.counterService.increment();
    }
    decrement() {
        this.counterService.decrement();
    }
    reset(newCount) {
        const count = parseInt(newCount, 10);
        if (!Number.isNaN(count)) {
            this.counterService.reset(count);
        }
    }
};
ServiceCounterComponent = __decorate([
    Component({
        selector: 'app-service-counter',
        imports: [],
        templateUrl: './service-counter.html',
        styleUrl: './service-counter.css'
    })
], ServiceCounterComponent);
export { ServiceCounterComponent };
//# sourceMappingURL=service-counter.js.map
