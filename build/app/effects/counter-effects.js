import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { increment, decrement, reset, saveSuccess, saveError } from '../actions/counter-actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
let CounterEffects = class CounterEffects {
    actions$;
    store$;
    counterApiService;
    constructor(actions$, store$, counterApiService) {
        this.actions$ = actions$;
        this.store$ = store$;
        this.counterApiService = counterApiService;
    }
    saveOnChange$ = createEffect(() => this.actions$.pipe(ofType(increment, decrement, reset), withLatestFrom(this.store$), mergeMap(([_, state]) => this.counterApiService.saveCounter(state.counter).pipe(map(() => saveSuccess()), catchError((error) => of(saveError({ error })))))));
};
CounterEffects = __decorate([
    Injectable()
], CounterEffects);
export { CounterEffects };
//# sourceMappingURL=counter-effects.js.map