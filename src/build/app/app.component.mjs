import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter-component.mjs';
import { IsStockLimited } from './directives/structural/is-stock-limited.mjs';
import { StockFilterPipe } from './pipes/stock-filter-pipe.mjs';
import { ServiceCounterComponent } from "./components/service-counter/service-counter.mjs";
let AppComponent = class AppComponent {
    constructor() {
        this.title = signal('testdemo');
        this.servcount3Id = 2024;
        this.flag3 = false;
        this.colorA = 'darkblue';
        this.colorB = 'darkslategrey';
        //
        this.dataClasse4 = 'maClasse4';
        //
        this.flag5 = false;
        //
        this.flag6 = false;
        //
        this.flag71 = false;
        this.flag72 = false;
        //
        this.color = 'yellow';
        this.nb1 = 4;
        this.nb2 = 12; // ces valeurs sont bien souvent récupérées en interrogeant une API REST
        this.isok = true;
        this.elems = [4, 9, 'toto', 12];
        this.numbs = [10, 50, 6, 18, 32,];
        // Liste des produits
        // Ces données sont souvent récupérées via une API REST
        this.products = [
            { id: 1, name: "Bouteilles d'eau", stock: 10 },
            { id: 2, name: "Pain", stock: 10 },
            { id: 3, name: "Viande", stock: 8 },
        ];
    }
    changeStyle3() {
        this.flag3 = !this.flag3;
    }
    changeClasse6() {
        this.flag6 = !this.flag6;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet, CommonModule, StockFilterPipe, CounterComponent, IsStockLimited, ServiceCounterComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
