import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Counter1 } from './counter1.js';
describe('Counter1', () => {
    // @ts-ignore
    let component;
    let fixture;
    // @ts-ignore
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
        // @ts-ignore
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=counter1.spec.js.map
