import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CounterApiService = class CounterApiService {
    constructor(http) {
        this.http = http;
    }
    saveCounter(counter) {
        return this.http.get(`/assets/counter.json?counter=${counter}`);
    }
};
CounterApiService = __decorate([
    Injectable()
], CounterApiService);
export { CounterApiService };
//# sourceMappingURL=counter-api-service.js.map