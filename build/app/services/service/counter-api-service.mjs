import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CounterApiService = class CounterApiService {
    constructor(http) {
        this.http = http;
        this.apiurl = "http://www.localhost:5500/spec/support";
    }
    saveCounter(counter) {
        return this.http.get(`/assets/counter.json?counter=${counter}`);
    }
    sendFormData(data) {
        return this.http.post(this.apiurl, data);
    }
};
CounterApiService = __decorate([
    Injectable()
], CounterApiService);
export { CounterApiService };
//# sourceMappingURL=counter-api-service.js.map