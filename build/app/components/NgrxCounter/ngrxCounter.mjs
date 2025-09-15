import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select } from '@ngrx/store';
import { __decorate } from "tslib";
import { decrement, increment, reset } from '../../actions/counter-actions.mjs';
import { selectCounterLoading } from '../../reducers/counter-reducer/selectors.mjs';
import { StandaloneServiceCounter } from '../standalone-service-counter/standalone-service-counter/standalone-service-counter.mjs';
let NgrxCounter = class NgrxCounter {
    constructor(store) {
        this.store = store;
        this.count$ = store.pipe(select(selectCounterLoading));
    }
    increment() {
        this.store.dispatch(increment());
    }
    decrement() {
        this.store.dispatch(decrement());
    }
    reset(NewCount) {
        const count = parseInt(NewCount, 10);
        if (!Number.isNaN(count)) {
            this.store.dispatch(reset({ count }));
        }
    }
};
NgrxCounter = __decorate([
    Component({
        selector: 'app-ngrx',
        imports: [CommonModule, StandaloneServiceCounter],
        templateUrl: './ngrxCounter.html',
        styleUrl: './ngrxCounter.css',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], NgrxCounter);
export { NgrxCounter };
//# sourceMappingURL=ngrxCounter.js.map
