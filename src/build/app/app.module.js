import { __decorate } from "tslib";
import { RouterTestingModule } from '@angular/router/testing';
import { CounterApiService } from './services/services/counter-api-service';
import { CounterEffects } from './effects/counter-effects';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { HttpClient } from '@angular/common/http';
import { Attribute, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { CommonModule } from '@angular/common';
import { IsStockLimited } from './directives/structural/is-stock-limited';
import { StockFilterPipe } from './pipes/stock-filter-pipe';
import { ServiceCounterComponent } from './components/service-counter/service-counter';
import { AppRoutingModule } from './app-routing.module';
import { CounterComponent } from './components/counter/counter-component';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2';
import { TodosService } from './services/todos-service';
import { CounterService } from './services/counter-service';
import { counterReducer } from './reducers/counter-reducer/counter-reducer';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { EffectsModule } from '@ngrx/effects';
import { FormComponent } from './components/form/form';
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
            PageNotFound,
            FormComponent
        ],
        imports: [
            BrowserModule,
            BrowserTestingModule,
            FormsModule,
            HttpClient,
            RouterModule.forRoot(routes),
            AppRoutingModule,
            CounterService,
            RouterTestingModule,
            AppComponent,
            Homecomponent,
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
        exports: [
            TodosService, CounterService, CounterApiService
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map