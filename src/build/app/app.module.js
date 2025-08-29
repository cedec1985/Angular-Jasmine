import { __decorate } from "tslib";
import { RouterTestingModule } from '@angular/router/testing';
import { CounterEffects } from './effects/counter-effects.js';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3.js';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component.js';
import { routes } from './app.routes';
import { Homecomponent } from './components/home/homecomponent/homecomponent.js';
import { CommonModule } from '@angular/common';
import { IsStockLimited } from './directives/structural/is-stock-limited.js';
import { StockFilterPipe } from './pipes/stock-filter-pipe.js';
import { ServiceCounterComponent } from './components/service-counter/service-counter.js';
import { AppRoutingModule } from './app-routing.module.js';
import { CounterComponent } from './components/counter/counter-component.js';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1.js';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2.js';
import { counterReducer } from './reducers/counter-reducer/counter-reducer.js';
import { PageNotFound } from './components/page-not-found/page-not-found.js';
import { EffectsModule } from '@ngrx/effects';
import { FormComponent } from './components/form/form.js';
import { AttributeDirective } from './directives/attribute/attribut.directive.js';
import { HttpClientTestingModule } from '@angular/common/http/testing';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            AttributeDirective,
            PageNotFound,
            BrowserModule,
            BrowserTestingModule,
            FormsModule,
            HttpClientModule,
            RouterModule.forRoot(routes),
            AppRoutingModule,
            RouterTestingModule,
            RouterModule,
            RouterOutlet,
            Counter1,
            Counter2,
            AppComponent,
            Homecomponent,
            IsStockLimited,
            StockFilterPipe,
            HttpClientModule,
            HttpClientTestingModule,
            CounterComponent,
            ServiceCounterComponent,
            ServiceCounterComponent3,
            StoreModule.forRoot({}),
            CommonModule,
            FormComponent,
            // NgRx Store
            StoreModule.forRoot(counterReducer, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            // NgRx Effects
            EffectsModule.forRoot([CounterEffects]),
        ],
        exports: [],
        providers: [],
        bootstrap: [AppModule]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
