import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
let ServiceCounterComponent3 = class ServiceCounterComponent3 {
    // id est une variable qui va contenir la valeur de : servcount3Id dans l'URL : /service-counter/servcount3Id
    // on peut aussi utiliser un type plus spécifique comme number, mais ici on utilise String pour simplifier
    // on importe ActivatedRoute pour pouvoir accéder aux paramètres de la route actuelle
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => this.id = params.get('servcount3Id'));
    }
};
ServiceCounterComponent3 = __decorate([
    Component({
        selector: 'app-service-counter-component3',
        imports: [CommonModule],
        templateUrl: './service-counter-component3.html',
        styleUrl: './service-counter-component3.css'
    })
], ServiceCounterComponent3);
export { ServiceCounterComponent3 };
//# sourceMappingURL=service-counter-component3.js.map