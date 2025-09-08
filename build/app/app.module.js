import { __decorate } from "tslib";
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
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter-component';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2';
import { FormComponent } from './components/form/form';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { ServiceCounterComponent } from './components/service-counter/service-counter';
import { AttributeDirective } from './directives/attribute/attribut.directive';
import { IsStockLimited } from './directives/structural/is-stock-limited';
import { CounterEffects } from './effects/counter-effects';
import { StockFilterPipe } from './pipes/stock-filter-pipe';
import { counterReducer } from './reducers/counter-reducer/counter-reducer';
import { CounterService } from './services/counter-service';
import { CounterApiService } from './services/services/counter-api-service';
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
            RouterOutlet,
            Counter1,
            Counter2,
            AppComponent,
            Homecomponent,
            IsStockLimited,
            StockFilterPipe,
            HttpClientTestingModule,
            CounterComponent,
            ServiceCounterComponent,
            ServiceCounterComponent3,
            CommonModule,
            FormComponent,
            FormsModule,
            ReactiveFormsModule,
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
            ServiceCounterComponent,
            ServiceCounterComponent3,
            CommonModule,
            FormComponent,
            FormsModule,
            ReactiveFormsModule,
        ],
        providers: [CounterService, CounterApiService, HttpClient, provideClientHydration()],
        bootstrap: [AppModule],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map