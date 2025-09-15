import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterApiService } from 'src/app/services/services/counter-api-service.mjs';
import { __decorate } from "tslib";
import { CounterService } from '../../services/counter-service.mjs';
let ServiceCounterComponent = class ServiceCounterComponent {
    constructor(counterService, counterApiService) {
        this.counterService = counterService;
        this.counterApiService = counterApiService;
        this.count = this.counterService.getCount();
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
    SaveCount() {
        const counter = this.counterApiService.saveCounter(10);
        console.log(counter);
    }
};
ServiceCounterComponent = __decorate([
    Component({
        selector: 'app-service-counter',
        imports: [CommonModule],
        providers: [CounterService, CounterApiService],
        templateUrl: './service-counter.html',
        styleUrl: './service-counter.css'
    })
], ServiceCounterComponent);
export { ServiceCounterComponent };
//# sourceMappingURL=service-counter.js.map
