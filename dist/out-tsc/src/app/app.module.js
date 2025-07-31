import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            RouterModule.forRoot(routes),
            AppComponent
        ],
        providers: [],
        bootstrap: []
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../../src/app/app.module.js.map