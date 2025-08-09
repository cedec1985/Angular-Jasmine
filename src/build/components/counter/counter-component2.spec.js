import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter-component.js';
import { By } from '@angular/platform-browser';
describe('CounterComponent', () => {
    /**
   * @type {import("@angular/core/testing").ComponentFixture<any>}
   */
    let fixture;
    /**
   * @type {import("@angular/core").DebugElement}
   */
    let debugElement;
    // Arrange
    // @ts-ignore
    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [CounterComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();
        debugElement = fixture.debugElement;
    });
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
