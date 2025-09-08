import { __decorate } from "tslib";
import { CounterService } from '../../services/counter-service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let ServiceCounterComponent = class ServiceCounterComponent {
    counterService;
    count$;
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
        imports: [CommonModule],
        providers: [CounterService],
        templateUrl: './service-counter.html',
        styleUrl: './service-counter.css'
    })
], ServiceCounterComponent);
export { ServiceCounterComponent };
//# sourceMappingURL=service-counter.js.map