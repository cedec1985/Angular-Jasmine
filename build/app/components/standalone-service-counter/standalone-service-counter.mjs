import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterApiService } from 'src/app/services/services/counter-api-service.mjs';
import { __decorate } from "tslib";
import { CounterService } from '../../../services/counter-service.mjs';
let StandaloneServiceCounter = class StandaloneServiceCounter {
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
StandaloneServiceCounter = __decorate([
    Component({
        selector: 'app-standalone-service-counter',
        imports: [CommonModule],
        providers: [CounterService, CounterApiService],
        templateUrl: './standalone-service-counter.html',
        styleUrl: './standalone-service-counter.css'
    })
], StandaloneServiceCounter);
export { StandaloneServiceCounter };
//# sourceMappingURL=standalone-service-counter.js.map
