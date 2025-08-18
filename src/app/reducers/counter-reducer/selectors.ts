import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state';

export const selectState = createFeatureSelector<AppState>('counter');

export const selectCounterLoading = createSelector(
  selectState,
  (state:AppState) => state.counter
);
