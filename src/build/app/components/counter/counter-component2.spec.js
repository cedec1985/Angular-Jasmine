import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter-component';
describe('CounterComponent', () => {
    let fixture;
    let debugElement;
    // Arrange
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
        const incrementButton = debugElement.query(By.css('[data-testid="increment-button"]'));
        incrementButton.triggerEventHandler('click', null);
        // Re-render the Component
        fixture.detectChanges();
        // Assert
        const countOutput = debugElement.query(By.css('[data-testid="count"]'));
        expect(countOutput.nativeElement.textContent).toBe('1');
    });
});
//# sourceMappingURL=counter-component2.spec.js.map