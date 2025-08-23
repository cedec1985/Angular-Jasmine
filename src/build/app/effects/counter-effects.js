// @ts-nocheck
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { decrement, increment, reset, saveError } from "../actions/counter-actions.js";

let CounterEffects = class CounterEffects {
    /**
   * @param {any} actions$
   * @param {any} store$
   * @param {any} counterApiService
   */
    constructor(actions$, store$, counterApiService) {
        this.actions$ = actions$;
        this.store$ = store$;
        this.counterApiService = counterApiService;
        this.saveOnChange$ = createEffect(() => this.actions$.pipe(ofType(increment, decrement, reset), withLatestFrom(this.store$), mergeMap(([_, state]) => this.counterApiService.saveCounter(state.counter).pipe(map(() => saveSuccess()), catchError((error) => of(saveError({ error })))))));
    }
};
CounterEffects = __decorate([
    Injectable()
], CounterEffects);
export { CounterEffects };

  function saveSuccess() {
    throw new Error("Function not implemented.");
  }
//# sourceMappingURL=counter-effects.js.map
