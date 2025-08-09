import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ServiceCounterComponent } from '../service-counter/service-counter.js';
describe('ServiceCounter', () => {
    /**
    * @type {import("@angular/core/testing").ComponentFixture<any>}
   */
    let fixture;
    /**
   * @type {import("@angular/core").DebugElement}
   */
    let component;
    // Arrange
    // @ts-ignore
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
