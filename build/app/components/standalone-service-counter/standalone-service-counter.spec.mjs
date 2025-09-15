import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { StandaloneServiceCounter } from './standalone-service-counter.mjs';
describe('StandaloneServiceCounter', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [StandaloneServiceCounter]
        })
            .compileComponents();
        fixture = TestBed.createComponent(StandaloneServiceCounter);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=standalone-service-counter.spec.js.map
