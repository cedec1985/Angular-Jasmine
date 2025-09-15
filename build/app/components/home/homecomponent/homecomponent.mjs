import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { __decorate } from "tslib";
import { CounterComponent } from '../../counter/counter-component.mjs';
import { NgrxCounter } from "../../NgrxCounter/ngrxCounter.mjs";
import { ServiceCounterComponent3 } from '../../service-counter-component3/service-counter-component3.mjs';
import { ServiceCounterComponent } from "../../service-counter/service-counter.mjs";
let Homecomponent = class Homecomponent {
    constructor() {
        this.servcount3Id = 2024;
    }
    handleCountChange(count) {
        console.log('countChange event from CounterComponent', count);
    }
};
Homecomponent = __decorate([
    Component({
        selector: 'app-homecomponent',
        imports: [CounterComponent, ServiceCounterComponent, ServiceCounterComponent3, CommonModule, FormsModule, ReactiveFormsModule, NgrxCounter, RouterOutlet, RouterLink],
        templateUrl: './homecomponent.html',
        styleUrl: './homecomponent.css'
    })
], Homecomponent);
export { Homecomponent };
//# sourceMappingURL=homecomponent.js.map
