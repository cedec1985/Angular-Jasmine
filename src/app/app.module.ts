import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    Attribute, // Registering the Attribut directive
    AppComponent,
    Homecomponent,
    IsStockLimited,  // Registering the IsStockLimited directive,
    StockFilterPipe,
    ServiceCounterComponent,
    ServiceCounterComponent3,
    CounterComponent,
    Counter1,
    Counter2
  ],
  imports: [
    BrowserModule,
    BrowserTestingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AppComponent,
    Homecomponent,
    ServiceCounterComponent,
    StoreModule.forRoot({}),
    CommonModule
  ],
  exports:[
    TodosService, CounterService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
