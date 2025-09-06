import { RouterTestingModule } from '@angular/router/testing';
import { CounterEffects } from './effects/counter-effects';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule, RouterOutlet } from '@angular/router';
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
import { counterReducer } from './reducers/counter-reducer/counter-reducer';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { EffectsModule } from '@ngrx/effects';
import { FormComponent } from './components/form/form';
import { AttributeDirective } from './directives/attribute/attribut.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@NgModule({
  declarations: [
  ],
  imports: [
    AttributeDirective,
    PageNotFound,
    BrowserModule,
    BrowserTestingModule,
    FormsModule,
    ReactiveFormsModule,
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
  exports:[ ],
  providers: [CounterService,CounterApiService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
