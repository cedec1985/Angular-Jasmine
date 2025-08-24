import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter-component';
import { ServiceCounterComponent } from "../../service-counter/service-counter";

@Component({
  selector: 'app-homecomponent',
  imports: [CounterComponent, ServiceCounterComponent],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
 public handleCountChange(count: number): void {
    console.log('countChange event from CounterComponent', count);
  }
}
