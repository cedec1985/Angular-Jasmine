import { PageNotFound } from './../../page-not-found/page-not-found';
import { ServiceCounterComponent3 } from './../../service-counter-component3/service-counter-component3';
import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter-component';
import { ServiceCounterComponent } from "../../service-counter/service-counter";
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../form/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgrxCounter } from "../../ngrx/ngrxCounter";

@Component({
  selector: 'app-homecomponent',
  imports: [CounterComponent, ServiceCounterComponent, ServiceCounterComponent3, CommonModule, FormComponent, FormsModule, ReactiveFormsModule, PageNotFound, NgrxCounter],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
 public handleCountChange(count: number): void {
    console.log('countChange event from CounterComponent', count);
  }
}
