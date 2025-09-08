import { selectCounterLoading } from './../../reducers/counter-reducer/selectors';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from './../../reducers/counter-reducer/counter-reducer';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../reducers/counter-reducer/app-state';
import { decrement, increment, reset } from '../../actions/counter-actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngrx',
  imports: [CommonModule],
  templateUrl: './ngrxCounter.html',
  styleUrl: './ngrxCounter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxCounter {
public count$ : Observable<CounterState>;
constructor(private store : Store<AppState>){
  this.count$ = store.pipe(select(selectCounterLoading));
}
public increment():void {
  this.store.dispatch(increment());
}
public decrement():void {
  this.store.dispatch(decrement());
}
public reset(NewCount:string):void {
  const count =parseInt(NewCount,10)
  if(!Number.isNaN(count)){
    this.store.dispatch(reset({count}));
  }
}
}
