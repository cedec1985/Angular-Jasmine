/**
 * This service is not used in the counter app,
 * but here as an example for Jasmine Spies.
 */
import { __awaiter } from "tslib";
class TodosService {
    constructor(
    // Bind `fetch ` to `window` to ensure that `window` is the `this` context
    fetch = window.fetch.bind(window)) {
        this.fetch = fetch;
    }
    /**
     * getTodos
     */
    getTodos() {
        // @ts-ignore
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const response = yield this.fetch('/todos');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }
            // @ts-ignore
            return yield response.json();
        });
    }
}
// Fake todos and response object
const todos = ['shop groceries', 'clean the house', 'pay bills'];
const okResponse = new Response(JSON.stringify(todos), {
    status: 200,
    statusText: 'OK',
    headers: { 'Content-Type': 'application/json' }
});
const errorResponse = new Response('Not Found', {
    status: 404,
    statusText: 'Not Found',
});
describe('TodosService', () => {
    // @ts-ignore
    it('gets todos successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const fetchspy = jasmine.createSpy('fetch').and.returnValue(okResponse);
        const todoService = new TodosService(fetchspy);
        // Act
        // @ts-ignore
        const actualTods = yield todoService.getTodos();
        // Assert
        expect(actualTods).toEqual(todos);
        expect(fetchspy).toHaveBeenCalledWith('/todos');
    }));
    // @ts-ignore
    it('handles an HTTP error when getting todos', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const fetchspy = jasmine.createSpy('fetch').and.returnValue(errorResponse);
        const todoService = new TodosService(fetchspy);
        // Act
        let error;
        try {
            yield todoService.getTodos();
        }
        catch (e) {
            error = e;
        }
        // Assert
        expect(error).toEqual(new Error('HTTP error! status: 404 Not Found'));
        expect(fetchspy).toHaveBeenCalledWith('/todos');
    }));
});
//# sourceMappingURL=todos-service.spec.js.map
