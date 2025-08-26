// @ts-nocheck
import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PageNotFound } from './page-not-found';
describe('PageNotFound', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PageNotFound]
        }).compileComponents();
        fixture = TestBed.createComponent(PageNotFound);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should have the correct message', () => {
        expect(component.message).toBe('Oups, page non trouvée !');
    });
});
//# sourceMappingURL=page-not-found.spec.js.map
