import { Component } from '@angular/core';
import { CounterComponent } from '../../counter/counter-component';

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
