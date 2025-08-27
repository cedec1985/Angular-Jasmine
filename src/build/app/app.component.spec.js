import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { findComponent } from './spec.helpers.component';
describe('AppComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
        beforeEach(() => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('devrait créer le composant', () => {
            const fixture = TestBed.createComponent(AppComponent);
            const app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        });
        it('contient un router-outlet', () => {
            const el = findComponent(fixture, 'router-outlet');
            expect(el).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=app.component.spec.js.map