import { Pipe, PipeTransform } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  stock: number;
}

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  /**
   * Filtre les produits selon la disponibilité en stock.
   * @param products Liste des produits
   * @param inStock true pour afficher les produits en stock, false pour ceux en rupture
   */
  transform(products: Product[], inStock: boolean = true): Product[] {
    if (!products) return [];

    return products.filter(product =>
      inStock ? product.stock > 0 : product.stock === 0
    );
  }

}
