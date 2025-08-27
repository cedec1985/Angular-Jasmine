import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IsStockLimited } from './is-stock-limited';

// Mock de l'enum ShopStructure
export enum ShopStructure {
  StockLimited = 10
}

// Composant hôte pour tester la directive
@Component({
  template: `
    <div *appIsStockLimited="stock">Stock limité !</div>
  `
})
class TestHostComponent {
  stock: number = 0;
}

describe('IsStockLimitedDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let debugElement: DebugElement;

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
