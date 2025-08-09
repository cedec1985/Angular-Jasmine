import { createAction, props } from '@ngrx/store';
export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement');
// @ts-ignore
export const reset = createAction('[counter] Reset', props());
export const saveSuccess = createAction('[counter] Save success');
// @ts-ignore
export const saveError = createAction('[counter] Save error', props());
//# sourceMappingURL=counter-actions.js.map
