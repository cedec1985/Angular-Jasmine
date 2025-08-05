import { Observable } from 'rxjs';
import { CounterState } from '../../reducers/counter-reducer/counter-reducer';
import { Injectable } from '@angular/core';
import { CounterService } from '../../services/counter-service';

@Injectable({
  providedIn: 'root'
})
export class ServiceCounterComponent {

  public count$: Observable<CounterState>;

  constructor(private counterService: CounterService) {
    this.count$ = this.counterService.getCount();
  }

  public increment(): void {
    this.counterService.increment();
  }

  public decrement(): void {
    this.counterService.decrement();
  }

  public reset(newCount: string): void {
    const count = parseInt(newCount, 10);
    if (!Number.isNaN(count)) {
      this.counterService.reset(count);
    }
  }
}
