import { __decorate } from "tslib";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Attribute, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routes, AppRoutingModule } from "./app-routing.module.js";
import { AppComponent } from "./app.component.js";
import { CounterComponent } from "./components/counter/counter-component.js";
import { Counter1 } from "./components/counter/countercomponent/counter1/counter1.js";
import { Counter2 } from "./components/counter/countercomponent/counter2/counter2.js";
import { Homecomponent } from "./components/home/homecomponent/homecomponent.js";
import { PageNotFound } from "./components/page-not-found/page-not-found.js";
import { ServiceCounterComponent3 } from "./components/service-counter-component3/service-counter-component3.js";
import { ServiceCounterComponent } from "./components/service-counter/service-counter.js";
import { IsStockLimited } from "./directives/structural/is-stock-limited.js";
import { CounterEffects } from "./effects/counter-effects.js";
import { StockFilterPipe } from "./pipes/stock-filter-pipe.js";
import { counterReducer } from "./reducers/counter-reducer/counter-reducer.js";
import { CounterService } from "./services/counter-service.js";
import { CounterApiService } from "./services/services/counter-api-service.js";
import { TodosService } from "./services/todos-service.js";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            Attribute, // Déclarer la directive
            AppComponent,
            Homecomponent,
            IsStockLimited, // Déclarer la directive
            StockFilterPipe,
            ServiceCounterComponent,
            ServiceCounterComponent3,
            CounterComponent,
            Counter1,
            Counter2,
            PageNotFound
        ],
        imports: [
            BrowserModule,
            BrowserTestingModule,
            FormsModule,
            HttpClient,
            // @ts-ignore
            RouterModule.forRoot(routes),
            AppRoutingModule,
            RouterTestingModule,
            AppComponent,
            Homecomponent,
            CounterComponent,
            ServiceCounterComponent,
            ServiceCounterComponent3,
            StoreModule.forRoot({}),
            CommonModule,
            // NgRx Store
            // @ts-ignore
            StoreModule.forRoot(counterReducer, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            // NgRx Effects
            EffectsModule.forRoot([CounterEffects]),
        ],
        exports: [
            TodosService, CounterService, CounterApiService
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
