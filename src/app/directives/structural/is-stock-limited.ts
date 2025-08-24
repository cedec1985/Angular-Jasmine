import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { ShopStructure } from 'app/enums/shop-structure';

/**
 * Directive to check if stock is limited.
 * This directive can be used to conditionally display elements based on stock availability.
 */

@Directive({
  selector: '[appIsStockLimited]'
})
export class IsStockLimited {

  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set isStockLimited(nb: number) {

                                                                // nb = value = 4      -> réception de la valeur transmise à la balise : *isStockLimited = "4"
    if (nb < ShopStructure.StockLimited && !this.hasView) {        // 4 < 10 et pas affiché
      this.viewContainer.createEmbeddedView(this.templateRef);  // c'est OK !  le contenu de templateRef : "stock limité 1!" est envoyé à l'emplacement (container)
      this.hasView = true;
    } else if (!nb && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }

    console.log(this.templateRef);
  }
}
