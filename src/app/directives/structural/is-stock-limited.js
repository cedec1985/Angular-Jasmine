import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { ShopStructure } from "../../enums/shop-structure";
/**
 * Directive to check if stock is limited.
 * This directive can be used to conditionally display elements based on stock availability.
 */
let IsStockLimited = class IsStockLimited {
    /**
   * @param {any} templateRef
   * @param {any} viewContainer
   */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.hasView = false;
    }
    /**
   * @param {number} nb
   */
    /**
   * @param {number} nb
   */
    set isStockLimited(nb) {
        // nb = value = 4      -> réception de la valeur transmise à la balise : *isStockLimited = "4"
        if (nb < ShopStructure.StockLimited && !this.hasView) { // 4 < 10 et pas affiché
            this.viewContainer.createEmbeddedView(this.templateRef); // c'est OK !  le contenu de templateRef : "stock limité 1!" est envoyé à l'emplacement (container)
            this.hasView = true;
        }
        else if (!nb && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
        console.log(this.templateRef);
    }
};
__decorate([
    Input()
], IsStockLimited.prototype, "isStockLimited", null);
IsStockLimited = __decorate([
    Directive({
        selector: '[appIsStockLimited]'
    })
], IsStockLimited);
export { IsStockLimited };
//# sourceMappingURL=is-stock-limited.js.map
