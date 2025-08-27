import { StockFilterPipe } from "./stock-filter-pipe";
describe('StockFilterPipe', () => {
    let pipe;
    beforeEach(() => {
        pipe = new StockFilterPipe();
    });
    it('devrait créer une instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('devrait afficher les produits en stock quand InStock est "true"', () => {
        const products = [
            { id: 1, name: 'Produit A', stock: 10 },
            { id: 2, name: 'Produit B', stock: 0 },
            { id: 3, name: 'Produit C', stock: 5 }
        ];
        const result = pipe.transform(products, true);
        expect(result.length).toBe(2);
        expect(result).toEqual([
            { id: 1, name: 'Produit A', stock: 10 },
            { id: 3, name: 'Produit C', stock: 5 }
        ]);
    });
    it('devrait afficher les produits pas en stock quand InStock est "false"', () => {
        const products = [
            { id: 1, name: 'Produit A', stock: 0 },
            { id: 2, name: 'Produit B', stock: 4 },
            { id: 3, name: 'Produit C', stock: 0 }
        ];
        const result = pipe.transform(products, false);
        expect(result.length).toBe(2);
        expect(result).toEqual([
            { id: 1, name: 'Produit A', stock: 0 },
            { id: 3, name: 'Produit C', stock: 0 }
        ]);
    });
    it('devrait afficher un tableau vide si "input" est "null" ', () => {
        const result = pipe.transform(null, true);
        expect(result).toEqual([]);
    });
    it('devrait afficher un tableau vide si "input" est "undefined" ', () => {
        const result = pipe.transform(undefined, false);
        expect(result).toEqual([]);
    });
});
//# sourceMappingURL=stock-filter-pipe.spec.js.map