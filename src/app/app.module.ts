import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { TodosService } from './services/todos-service';
import { StoreModule } from '@ngrx/store';

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
