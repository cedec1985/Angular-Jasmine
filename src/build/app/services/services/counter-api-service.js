import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CounterApiService = class CounterApiService {
    /**
   * @param {any} data
   */
    envoyerFormulaire(data) {
        return this.http.post(this.apiUrl, data);
    }
    /**
   * @param {any} http
   */
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://exemple.com/lander';
    }
    /**
   * @param {any} counter
   */
    saveCounter(counter) {
        return this.http.get(`/assets/counter.json?counter=${counter}`);
    }
};
CounterApiService = __decorate([
    Injectable()
], CounterApiService);
export { CounterApiService };
//# sourceMappingURL=counter-api-service.js.map
