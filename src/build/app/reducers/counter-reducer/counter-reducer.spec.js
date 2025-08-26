// @ts-nocheck
import { decrement, increment, reset } from "../../actions/counter-actions";
import { counterReducer } from "./counter-reducer";
describe('Counter Reducer', () => {
    const initialState = 0;
    it('devrait incrémenter', () => {
        const action = increment();
        const result = counterReducer(initialState, action);
        expect(result).toBe(1);
    });
    it('devrait décrémenter', () => {
        const action = decrement();
        const result = counterReducer(1, action);
        expect(result).toBe(0);
    });
    it('devrait reseter l/état à une valeur donnée', () => {
        const action = reset({ count: 42 });
        const result = counterReducer(10, action);
        expect(result).toBe(42);
    });
});
//# sourceMappingURL=counter-reducer.spec.js.map
