import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter-component.js';
describe('CounterComponent', () => {
    // @ts-ignore
    let fixture;
    // @ts-ignore
    let debugElement;
    // Arrange
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CounterComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();
        debugElement = fixture.debugElement;
    }));
    it('increments the count', () => {
        // Act
        // @ts-ignore
        const incrementButton = debugElement.query(By.css('[data-testid="increment-button"]'));
        incrementButton.triggerEventHandler('click', null);
        // Re-render the Component
        // @ts-ignore
        fixture.detectChanges();
        // Assert
        // @ts-ignore
        const countOutput = debugElement.query(By.css('[data-testid="count"]'));
        expect(countOutput.nativeElement.textContent).toBe('1');
    });
});
//# sourceMappingURL=counter-component2.spec.js.map
