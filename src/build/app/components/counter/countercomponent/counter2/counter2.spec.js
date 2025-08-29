import { TestBed } from '@angular/core/testing';
import { Counter2 } from './counter2.js';
describe('Counter2', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Counter2]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Counter2);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=counter2.spec.js.map