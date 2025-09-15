import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Counter1 } from './counter1.mjs';
describe('Counter1', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [Counter1]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Counter1);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=counter1.spec.js.map
