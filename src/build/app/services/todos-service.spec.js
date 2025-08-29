/**
 * Ce service n'est pas utilisé dans app counter,
 * mais permet de montrer un exemple d'utilisation des spies jasmine .
 */
class TodosService {
    constructor(
    // Lier fetch à window pour être sûr que window est le contexte
    fetch = window.fetch.bind(window)) {
        this.fetch = fetch;
    }
    /**
     * getTodos
     */
    async getTodos() {
        const response = await this.fetch('/todos');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
        }
        return await response.json();
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
    it('gets todos successfully', async () => {
        // Arrange
        const fetchspy = jasmine.createSpy('fetch').and.returnValue(okResponse);
        const todoService = new TodosService(fetchspy);
        // Act
        const actualTods = await todoService.getTodos();
        // Assert
        expect(actualTods).toEqual(todos);
        expect(fetchspy).toHaveBeenCalledWith('/todos');
    });
    it('handles an HTTP error when getting todos', async () => {
        // Arrange
        const fetchspy = jasmine.createSpy('fetch').and.returnValue(errorResponse);
        const todoService = new TodosService(fetchspy);
        // Act
        let error;
        try {
            await todoService.getTodos();
        }
        catch (e) {
            error = e;
        }
        // Assert
        expect(error).toEqual(new Error('HTTP error! status: 404 Not Found'));
        expect(fetchspy).toHaveBeenCalledWith('/todos');
    });
});
export {};
//# sourceMappingURL=todos-service.spec.js.map