import { __decorate } from "tslib";
import { StandaloneServiceCounter } from './components/standalone-service-counter/standalone-service-counter/standalone-service-counter.mjs';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { routes, AppRoutingModule } from './app-routing.module.mjs';
import { AppComponent } from './app.component.mjs';
import { CounterComponent } from './components/counter/counter-component.mjs';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1.mjs';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2.mjs';
import { FormComponent } from './components/form/form.mjs';
import { Homecomponent } from './components/home/homecomponent/homecomponent.mjs';
import { PageNotFound } from './components/page-not-found/page-not-found.mjs';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3.mjs';
import { AttributeDirective } from './directives/attribute/attribut.directive.mjs';
import { IsStockLimited } from './directives/structural/is-stock-limited.mjs';
import { CounterEffects } from './effects/counter-effects.mjs';
import { StockFilterPipe } from './pipes/stock-filter-pipe.mjs';
import { counterReducer } from './reducers/counter-reducer/counter-reducer.mjs';
import { CounterService } from './services/counter-service.mjs';
import { CounterApiService } from './services/services/counter-api-service.mjs';
import { NgrxCounter } from './components/NgrxCounter/ngrxCounter.mjs';
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
            ReactiveFormsModule,
            HttpClientModule,
            RouterModule.forRoot(routes),
            RouterTestingModule,
            RouterModule,
            AppRoutingModule,
            RouterOutlet,
            Counter1,
            Counter2,
            AppComponent,
            Homecomponent,
            IsStockLimited,
            StockFilterPipe,
            HttpClientTestingModule,
            CounterComponent,
            ServiceCounterComponent3,
            CommonModule,
            FormComponent,
            FormsModule,
            ReactiveFormsModule,
            NgrxCounter,
            StandaloneServiceCounter,
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
        exports: [
            AttributeDirective,
            PageNotFound,
            BrowserModule,
            BrowserTestingModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule,
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
            ServiceCounterComponent3,
            CommonModule,
            FormComponent,
            FormsModule,
            ReactiveFormsModule,
            NgrxCounter,
            StandaloneServiceCounter
        ],
        providers: [CounterService, CounterApiService, HttpClient, provideClientHydration()],
        bootstrap: [AppModule],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
