import { Component } from '@angular/core';
import { CounterComponent } from 'app/components/counter/counter-component';
import { IsStockLimited } from 'app/directives/structural/is-stock-limited';


@Component({
  selector: 'app-homecomponent',
  imports: [CounterComponent],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
 public handleCountChange(count: number): void {
    console.log('countChange event from CounterComponent', count);
  }
}
