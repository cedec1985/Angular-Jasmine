import { Component,EventEmitter,Input, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent implements OnChanges {
@Input()
public startCount = 0;
@Output()
countChange = new EventEmitter<number>();

public count = 0;

ngOnChanges() : void{
  this.count = this.startCount;
}
public increment() : void {
  this.count++;
  this.countChange.emit(this.count);
}
public decrement() : void {
    this.count--;
    this.countChange.emit(this.count);
}
public reset() : void {
    const count = parseInt(this.startCount.toString(),10);
    this.countChange.emit(this.count);
    if(!Number.isNaN(count)) {
        this.count = count;
        this.notify();
    }
  }
public notify() : void {
    this.countChange.emit(this.count);
  }
}
