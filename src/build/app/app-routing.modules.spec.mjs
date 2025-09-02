import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from './app-routing.module.mjs';
import { Homecomponent } from './components/home/homecomponent/homecomponent.mjs';
import { CounterComponent } from './components/counter/counter-component.mjs';
import { Counter1 } from './components/counter/countercomponent/counter1/counter1.mjs';
import { Counter2 } from './components/counter/countercomponent/counter2/counter2.mjs';
import { ServiceCounterComponent } from './components/service-counter/service-counter.mjs';
import { ServiceCounterComponent3 } from './components/service-counter-component3/service-counter-component3.mjs';
import { PageNotFound } from './components/page-not-found/page-not-found.mjs';
import { By } from '@angular/platform-browser';
describe('AppRoutingModule', () => {
    let router;
    let location;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([]), AppRoutingModule],
            declarations: [
                Homecomponent,
                CounterComponent,
                Counter1,
                Counter2,
                ServiceCounterComponent,
                ServiceCounterComponent3,
                PageNotFound
            ]
        }).compileComponents();
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        fixture = TestBed.createComponent(AppRoutingModule);
        router.initialNavigation(); // Initialise la navigation
    });
    it('devrait rediriger "" vers "/home"', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/home');
    }));
    it('devrait charger Homecomponent pour /home', fakeAsync(() => {
        router.navigate(['home']);
        tick();
        expect(location.path()).toBe('/home');
    }));
    it('devrait charger CounterComponent pour /counter-component', fakeAsync(() => {
        router.navigate(['counter-component']);
        tick();
        expect(location.path()).toBe('/counter-component');
    }));
    it('devrait charger Counter1 pour /counter-component/counter1', fakeAsync(() => {
        router.navigate(['counter-component/counter1']);
        tick();
        expect(location.path()).toBe('/counter-component/counter1');
    }));
    it('devrait charger Counter2 pour /counter-component/counter2', fakeAsync(() => {
        router.navigate(['counter-component/counter2']);
        tick();
        expect(location.path()).toBe('/counter-component/counter2');
    }));
    it('devrait charger ServiceCounterComponent pour /service-counter', fakeAsync(() => {
        router.navigate(['service-counter']);
        tick();
        expect(location.path()).toBe('/service-counter');
    }));
    it('devrait charger ServiceCounterComponent3 avec paramètre :id', fakeAsync(() => {
        router.navigate(['service-counter/servcount3Id']);
        tick();
        expect(location.path()).toBe('/service-counter/servcount3Id');
    }));
    it('devrait afficher un message pour une route inconnue', fakeAsync(() => {
        router.navigate(['**']);
        tick();
        fixture.detectChanges();
        const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
        expect(h1.textContent).toContain('Oups, page non trouvée !');
    }));
});
//# sourceMappingURL=app-routing.modules.spec.js.map
