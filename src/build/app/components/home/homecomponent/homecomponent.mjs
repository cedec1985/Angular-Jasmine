import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter-component.mjs';
import { ServiceCounterComponent } from "../../service-counter/service-counter.mjs";
let Homecomponent = class Homecomponent {
    handleCountChange(count) {
        console.log('countChange event from CounterComponent', count);
    }
};
Homecomponent = __decorate([
    Component({
        selector: 'app-homecomponent',
        imports: [CounterComponent, ServiceCounterComponent],
        templateUrl: './homecomponent.html',
        styleUrl: './homecomponent.css'
    })
], Homecomponent);
export { Homecomponent };
//# sourceMappingURL=homecomponent.js.map
