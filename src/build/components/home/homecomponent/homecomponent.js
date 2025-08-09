import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CounterComponent } from "../../counter/counter-component.js";

let Homecomponent = class Homecomponent {
    /**
   * @param {any} count
   */
    handleCountChange(count) {
        console.log('countChange event from CounterComponent', count);
    }
};
Homecomponent = __decorate([
    Component({
        selector: 'app-homecomponent',
        imports: [CounterComponent],
        templateUrl: './homecomponent.html',
        styleUrl: './homecomponent.css'
    })
], Homecomponent);
export { Homecomponent };
//# sourceMappingURL=homecomponent.js.map
