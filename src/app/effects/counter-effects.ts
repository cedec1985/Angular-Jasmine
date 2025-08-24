import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from 'app/reducers/counter-reducer/app-state.js';
import { CounterApiService } from 'app/services/services/counter-api-service.js';
import { increment, decrement, reset, saveSuccess, saveError } from 'app/actions/counter-actions.js';

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



