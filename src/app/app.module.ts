import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { TodosService } from './services/todos-service';
import { CounterComponent } from './components/counter/counter-component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    BrowserTestingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppComponent,
    Homecomponent,
    StoreModule.forRoot({})
  ],
  providers: [TodosService],
  bootstrap: []
})
export class AppModule { }
