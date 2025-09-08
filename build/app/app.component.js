import { __decorate } from "tslib";
import { PageNotFound } from './components/page-not-found/page-not-found';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter-component';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { ServiceCounterComponent } from "./components/service-counter/service-counter";
import { IsStockLimited } from './directives/structural/is-stock-limited';
import { StockFilterPipe } from './pipes/stock-filter-pipe';
import { CounterService } from './services/counter-service';
let AppComponent = class AppComponent {
    title = signal('testdemo');
    servcount3Id = 2024;
    flag3 = false;
    colorA = 'darkblue';
    colorB = 'darkslategrey';
    //
    dataClasse4 = 'maClasse4';
    //
    flag5 = false;
    //
    flag6 = false;
    //
    flag71 = false;
    flag72 = false;
    //
    color = 'yellow';
    changeStyle3() {
        this.flag3 = !this.flag3;
    }
    changeClasse6() {
        this.flag6 = !this.flag6;
    }
    nb1 = 4;
    nb2 = 12; // ces valeurs sont bien souvent récupérées en interrogeant une API REST
    isok = true;
    elems = [4, 9, 'toto', 12];
    numbs = [10, 50, 6, 18, 32,];
    // Liste des produits
    // Ces données sont souvent récupérées via une API REST
    products = [
        { id: 1, name: "Bouteilles d'eau", stock: 10 },
        { id: 2, name: "Pain", stock: 10 },
        { id: 3, name: "Viande", stock: 8 },
    ];
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        imports: [RouterOutlet, CommonModule, StockFilterPipe, CounterComponent, IsStockLimited, ServiceCounterComponent, ServiceCounterComponent3, Homecomponent, RouterLink, PageNotFound],
        providers: [CounterService],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map