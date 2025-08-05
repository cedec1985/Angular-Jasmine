import { Component } from '@angular/core';

@Component({
  selector: 'app-homecomponent',
  imports: [],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css'
})
export class Homecomponent {
 public handleCountChange(count: number): void {
    console.log('countChange event from CounterComponent', count);
  }
}
