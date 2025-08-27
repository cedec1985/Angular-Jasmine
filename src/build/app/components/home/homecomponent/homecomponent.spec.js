import { __awaiter } from "tslib";
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Homecomponent } from './homecomponent';
import { findComponent } from '../../../spec.helpers.component';
describe('HomeComponent', () => {
    let fixture;
    let component;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [component],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
        fixture = TestBed.createComponent(Homecomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    describe('app-counter-component', () => {
        it('afficher app-counter-component', () => {
            const el = findComponent(fixture, 'app-counter-component');
            expect(el).toBeTruthy();
        });
        it('le compteur débute à 5', () => {
            const el = findComponent(fixture, 'app-counter-component');
            expect(el.properties['startCount']).toBe(5);
        });
        it('écoute les changements pour le compteur', () => {
            spyOn(console, 'log');
            const el = findComponent(fixture, 'app-counter-component');
            const count = 5;
            el.triggerEventHandler('countChange', 5);
            expect(console.log).toHaveBeenCalledWith('countChange event from CounterComponent', count);
        });
    });
    it('devrait montrer le composant', () => {
        const el = findComponent(fixture, 'app-service-counter');
        expect(el).toBeTruthy();
    });
});
//# sourceMappingURL=homecomponent.spec.js.map