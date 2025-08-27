// @ts-nocheck
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../../actions/counter-actions';
export const initialState = 0;
const reducer = createReducer(initialState, on(increment, (state) => state + 1), on(decrement, (state) => state - 1), on(reset, (_, action) => action.count));
/**
 * @param {number | undefined} state
 * @param {import("@ngrx/store").Action<string>} action
 */
export function counterReducer(state, action) {
    return reducer(state, action);
}
//# sourceMappingURL=counter-reducer.js.map
