import { __awaiter } from "tslib";
import { FormComponent } from './form';
import { TestBed } from '@angular/core/testing';
describe('Form', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [FormComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=form.spec.js.map