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

@NgModule({
  declarations: [
    Attribute, // Registering the Attribut directive
    AppComponent,
    IsStockLimited,  // Registering the IsStockLimited directive,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserTestingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    Homecomponent,
    StoreModule.forRoot({}),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
