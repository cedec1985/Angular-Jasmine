import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
describe('AppComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
            // Prefer to declare child components unless things are too complex, else use schema
            // schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
//# sourceMappingURL=../../../src/app/app.component.spec.js.map