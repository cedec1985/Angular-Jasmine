import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter-component';
import { Homecomponent } from './components/home/homecomponent/homecomponent';
export const routes = [
    { path: '', pathMatch: 'full', component: Homecomponent },
    { path: 'counter-component', component: CounterComponent }
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