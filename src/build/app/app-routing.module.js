// @ts-nocheck
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter-component';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3';
import { ServiceCounterComponent } from './components/service-counter/service-counter';
export const routes = [
    { path: 'home', component: Homecomponent }, // page d'accueil
    { path: '', pathMatch: 'full', redirectTo: '/home' }, // redirection vers la page d'accueil
    { path: 'counter-component', component: CounterComponent,
        children: [
            { path: 'counter1', component: Counter1 }, // permet d'indiquer une route vers un onglet 1
            { path: 'counter2', component: Counter2 } // permet d'indiquer une route vers un onglet 2
        ]
    },
    { path: 'service-counter', component: ServiceCounterComponent },
    { path: 'service-counter/:servcount3Id', component: ServiceCounterComponent3 }, // ':' pour indiquer que c'est une variable qui peut prendre n'importe quelle valeur
    { path: '**', component: PageNotFound }, // une route inconnue
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
