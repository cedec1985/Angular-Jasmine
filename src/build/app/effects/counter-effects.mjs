import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { increment, decrement, reset, saveSuccess, saveError } from '../actions/counter-actions.mjs';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
let CounterEffects = class CounterEffects {
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
//# sourceMappingURL=counter-effects.js.map
