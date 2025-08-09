import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
let AppComponent = class AppComponent {
    constructor() {
        this.title = signal('testdemo');
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map