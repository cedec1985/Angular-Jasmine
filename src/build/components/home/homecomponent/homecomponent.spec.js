import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Homecomponent } from './homecomponent';
describe('Homecomponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [Homecomponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Homecomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=homecomponent.spec.js.map