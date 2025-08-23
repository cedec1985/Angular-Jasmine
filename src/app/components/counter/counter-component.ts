import { Component,EventEmitter,Input, Output, OnChanges, OnInit, inject} from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter-component',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css'
})
export class CounterComponent implements OnChanges, OnInit {
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
  this.notify();
}
public decrement() : void {
    this.count--;
    this.countChange.emit(this.count);
    this.notify();
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

private store = inject(Store)
  counter$: Observable<number> = this.store.select(selectCounterLoading);
  ngOnInit(): void {
    this.store.dispatch(increment());
  }













}
