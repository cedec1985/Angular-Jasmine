import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CounterComponent } from 'app/components/counter/counter-component';
let Homecomponent = class Homecomponent {
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