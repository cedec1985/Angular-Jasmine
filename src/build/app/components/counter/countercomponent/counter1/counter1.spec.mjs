import { TestBed } from '@angular/core/testing';
import { Counter1 } from './counter1.js';
describe('Counter1', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Counter1]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Counter1);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=counter1.spec.js.map
