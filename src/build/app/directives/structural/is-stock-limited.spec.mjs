import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IsStockLimited } from './is-stock-limited.js';
// Mock de l'enum ShopStructure
export var ShopStructure;
(function (ShopStructure) {
    ShopStructure[ShopStructure["StockLimited"] == 10] = "StockLimited";
})(ShopStructure || (ShopStructure = {}));
// Composant hôte pour tester la directive
let TestHostComponent = class TestHostComponent {
    constructor() {
        this.stock = 0;
    }
};
TestHostComponent = __decorate([
    Component({
        template: `
    <div *appIsStockLimited="stock">Stock limité !</div>
  `
    })
], TestHostComponent);
describe('IsStockLimitedDirective', () => {
    let fixture;
    let component;
    let debugElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IsStockLimited, TestHostComponent]
        });
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
    });
    it('should create the view if stock is less than StockLimited', () => {
        component.stock = 4; // 4 < 10
        fixture.detectChanges();
        const div = debugElement.query(By.css('div'));
        expect(div).toBeTruthy();
        expect(div.nativeElement.textContent).toContain('Stock limité !');
    });
    it('should not create the view if stock is equal or greater than StockLimited', () => {
        component.stock = 10; // 10 >= 10
        fixture.detectChanges();
        const div = debugElement.query(By.css('div'));
        expect(div).toBeNull();
    });
    it('should clear the view if stock becomes falsy (e.g. 0)', () => {
        component.stock = 4; // d'abord < 10, donc la vue est créée
        fixture.detectChanges();
        let div = debugElement.query(By.css('div'));
        expect(div).toBeTruthy();
        component.stock = 0; // maintenant 0 → vue supprimée
        fixture.detectChanges();
        div = debugElement.query(By.css('div'));
        expect(div).toBeNull();
    });
});
//# sourceMappingURL=is-stock-limited.spec.js.map
