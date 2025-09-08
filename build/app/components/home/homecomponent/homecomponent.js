import { __decorate } from "tslib";
import { PageNotFound } from './../../page-not-found/page-not-found';
import { ServiceCounterComponent3 } from './../../service-counter-component3/service-counter-component3';
import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter-component';
import { ServiceCounterComponent } from "../../service-counter/service-counter";
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let Homecomponent = class Homecomponent {
    handleCountChange(count) {
        console.log('countChange event from CounterComponent', count);
    }
};
Homecomponent = __decorate([
    Component({
        selector: 'app-homecomponent',
        imports: [CounterComponent, ServiceCounterComponent, ServiceCounterComponent3, CommonModule, FormComponent, FormsModule, ReactiveFormsModule, PageNotFound],
        templateUrl: './homecomponent.html',
        styleUrl: './homecomponent.css'
    })
], Homecomponent);
export { Homecomponent };
//# sourceMappingURL=homecomponent.js.map