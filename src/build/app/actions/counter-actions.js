import { createAction, props } from '@ngrx/store';
export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement');
export const reset = createAction('[counter] Reset', props());
export const saveSuccess = createAction('[counter] Save success');
export const saveError = createAction('[counter] Save error', props());
//# sourceMappingURL=counter-actions.js.map