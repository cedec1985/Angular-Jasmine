import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CounterService {

  private count = 0;

  private subject: BehaviorSubject<number>;

  constructor() {
    this.subject = new BehaviorSubject(this.count);
  }

  // Chaque BehaviorSubject est un Observable et un Observer.
  // Nous voulons ne pas exposer l'observable à l'extérieur
  // Nous transformons BehaviorSubject en un simple Observable.
  public getCount(): Observable<number> {
    return this.subject.asObservable();
  }

  public increment(): void {
    this.count++;
    this.notify();
  }

  public decrement(): void {
    this.count--;
    this.notify();
  }

  public reset(newCount: number): void {
    this.count = newCount;
    this.notify();
  }

  private notify(): void {
    this.subject.next(this.count);
  }
}
