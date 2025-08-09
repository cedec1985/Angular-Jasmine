import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ServiceCounterComponent } from '../service-counter/service-counter';
describe('ServiceCounter', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [ServiceCounterComponent],
        })
            .compileComponents();
        fixture = TestBed.createComponent(ServiceCounterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=service-counter.spec.js.map