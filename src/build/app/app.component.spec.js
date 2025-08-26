// @ts-nocheck
import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter-component';
import { ServiceCounterComponent } from './components/service-counter/service-counter';
import { IsStockLimited } from './directives/structural/is-stock-limited';
import { StockFilterPipe } from './pipes/stock-filter-pipe';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
describe('AppComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterOutlet
            ],
            declarations: [
                AppComponent,
                CounterComponent,
                ServiceCounterComponent,
                IsStockLimited,
                StockFilterPipe
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create the AppComponent', () => {
        expect(component).toBeTruthy();
    });
    it('should toggle flag3 when changeStyle3 is called', () => {
        const initialFlag = component.flag3;
        component.changeStyle3();
        expect(component.flag3).toBe(!initialFlag);
    });
    it('should toggle flag6 when changeClasse6 is called', () => {
        const initialFlag = component.flag6;
        component.changeClasse6();
        expect(component.flag6).toBe(!initialFlag);
    });
    it('should have title signal with value "testdemo"', () => {
        expect(component.title()).toBe('testdemo');
    });
    it('should contain 3 products with correct data', () => {
        expect(component.products.length).toBe(3);
        expect(component.products[0]).toEqual({ id: 1, name: "Bouteilles d'eau", stock: 10 });
        expect(component.products[1].name).toBe('Pain');
        expect(component.products[2].stock).toBe(8);
    });
    it('should have an elems array containing mixed values', () => {
        expect(component.elems).toContain(4);
        expect(component.elems).toContain('toto');
    });
    it('should have a numbs array of numbers', () => {
        expect(component.numbs.every(n => typeof n === 'number')).toBeTrue();
        expect(component.numbs.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=app.component.spec.js.map
