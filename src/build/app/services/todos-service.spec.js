/**
 * Ce service n'est pas utilisé dans app counter,
 * mais permet de montrer un exemple d'utilisation des spies jasmine .
 */
import { __awaiter } from "tslib";
class TodosService {
    constructor(
    // Lier fetch à window pour être sûr que window est le contexte
    fetch = window.fetch.bind(window)) {
        this.fetch = fetch;
    }
    /**
     * getTodos
     */
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.fetch('/todos');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
            }
            return yield response.json();
        });
    }
}
// Créer un Fake todos et un objet pour la réponse 
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
    it('gets todos successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const fetchspy = jasmine.createSpy('fetch').and.returnValue(okResponse);
        const todoService = new TodosService(fetchspy);
        // Act
        const actualTods = yield todoService.getTodos();
        // Assert
        expect(actualTods).toEqual(todos);
        expect(fetchspy).toHaveBeenCalledWith('/todos');
    }));
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