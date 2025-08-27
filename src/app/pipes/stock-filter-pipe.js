import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let StockFilterPipe = class StockFilterPipe {
    /**
   * Filtre les produits selon la disponibilité en stock.
   * @param {any[]} products Liste des produits
   * @param inStock true pour afficher les produits en stock, false pour ceux en rupture
   */
    transform(products, inStock = true) {
        if (!products)
            return [];
        return products.filter((/** @type {{ stock: number; }} */ product) => inStock ? product.stock > 0 : product.stock === 0);
    }
};
StockFilterPipe = __decorate([
    Pipe({
        name: 'stockFilter'
    })
], StockFilterPipe);
export { StockFilterPipe };
//# sourceMappingURL=stock-filter-pipe.js.map
