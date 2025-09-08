import { createFeatureSelector, createSelector } from '@ngrx/store';
export const selectState = createFeatureSelector('counter');
export const selectCounterLoading = createSelector(selectState, (state) => state.counter);
//# sourceMappingURL=selectors.js.map