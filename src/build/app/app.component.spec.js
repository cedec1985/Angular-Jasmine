import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
    let component;
    let fixture;
    let debugElement;
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
            expect(component).toBeTruthy();
        });
        it('contient un router-outlet', () => {
            const router = fixture.debugElement.query(By.css('router-outlet'));
            expect(router).toBeTruthy();
        });
    }));
});
//# sourceMappingURL=app.component.spec.js.map