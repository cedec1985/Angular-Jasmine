import { TestBed } from '@angular/core/testing';
import { PageNotFound } from './page-not-found.js';
describe('PageNotFound', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageNotFound]
        }).compileComponents();
        fixture = TestBed.createComponent(PageNotFound);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should have the correct message', () => {
        expect(component.message).toBe('Oups, page non trouvée !');
    });
});
//# sourceMappingURL=page-not-found.spec.js.map
