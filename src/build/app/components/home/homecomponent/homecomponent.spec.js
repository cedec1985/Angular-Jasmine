// @ts-nocheck
import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Homecomponent } from './homecomponent';
import { CounterComponent } from '../../counter/counter-component';
import { ServiceCounterComponent } from '../../service-counter/service-counter';
describe('Homecomponent', () => {
    // @ts-ignore
    let component;
    let fixture;
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [Homecomponent],
            imports: [CounterComponent, ServiceCounterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(Homecomponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
    it('should handle count change and log the value', () => {
        const consoleSpy = spyOn(console, 'log');
        component.handleCountChange(5);
        expect(consoleSpy).toHaveBeenCalledWith('countChange event from CounterComponent', 5);
    });
});
//# sourceMappingURL=homecomponent.spec.js.map
