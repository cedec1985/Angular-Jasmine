import { __decorate } from "tslib";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = signal('testdemo');
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            imports: [RouterOutlet],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map