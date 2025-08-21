import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../reducers/counter-reducer/app-state';
import { CounterApiService } from '../services/services/counter-api-service';
import {
  decrement,
  increment,
  reset,
  saveError,
  saveSuccess,
}
from '../actions/counter-actions';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private counterApiService: CounterApiService,
  ) {}

  public saveOnChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment, decrement, reset),
      withLatestFrom(this.store$),
      mergeMap(([_, state]) =>
        this.counterApiService.saveCounter(state.counter).pipe(
          map(() => saveSuccess()),
          catchError((error) => of(saveError({ error }))),
        ),
      ),
    ),
  );
}



