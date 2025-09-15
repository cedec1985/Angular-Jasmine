import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NgrxCounter } from './ngrxCounter.mjs';
import { By } from '@angular/platform-browser';
import { decrement, increment, reset } from '../../actions/counter-actions.mjs';
const mockState = {
    counter: 10
};
const NewCount = 20;
describe('NgrxCounter', () => {
    let store;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [NgrxCounter],
            providers: [provideMockStore({ initialState: mockState })]
        })
            .compileComponents();
        store = TestBed.inject(Store);
        spyOn(store, 'dispatch');
        fixture = TestBed.createComponent(NgrxCounter);
        fixture.detectChanges();
    }));
    fit('shows the count', () => {
        expectText(fixture, 'count', String(mockState.counter));
    });
    fit('increments the count', () => {
        click(fixture, 'increment-button');
        expect(store.dispatch).toHaveBeenCalledWith(increment());
    });
    fit('decrements the count', () => {
        click(fixture, 'decrement-button');
        expect(store.dispatch).toHaveBeenCalledWith(decrement());
    });
    it('resets the count', () => {
        setFieldValue(fixture, 'reset-input', String(NewCount));
        click(fixture, 'reset-button');
        expect(store.dispatch).toHaveBeenCalledWith(reset({ count: NewCount }));
    });
    it('does not reset if the value is not a number', () => {
        const value = 'not a number';
        setFieldValue(fixture, 'reset-input', value);
        click(fixture, 'reset-button');
        expect(store.dispatch).not.toHaveBeenCalled();
    });
});
/** Spec Helpers :
 * Expects that the element with the given `data-testid` attribute
 * has the given text content.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 * @param text Expected text
 */
export function expectText(fixture, testId, text) {
    expect(getText(fixture, testId)).toBe(text);
}
/**
 * Gets the text content of an element with the given `data-testid` attribute.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 */
export function getText(fixture, testId) {
    return findEl(fixture, testId).nativeElement.textContent;
}
/**
 * Finds an element inside the Component by the given `data-testid` attribute.
 * Throws an error if no element was found.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 *
 */
export function findEl(fixture, testId) {
    return queryByCss(fixture, testIdSelector(testId));
}
/**
 * Finds a single element inside the Component by the given CSS selector.
 * Throws an error if no element was found.
 *
 * @param fixture Component fixture
 * @param selector CSS selector
 *
 */
export function queryByCss(fixture, selector) {
    // The return type of DebugElement#query() is declared as DebugElement,
    // but the actual return type is DebugElement | null.
    // See https://github.com/angular/angular/issues/22449.
    const debugElement = fixture.debugElement.query(By.css(selector));
    // Fail on null so the return type is always DebugElement.
    if (!debugElement) {
        throw new Error(`queryByCss: Element with ${selector} not found`);
    }
    return debugElement;
}
/**
 * Returns a selector for the `data-testid` attribute with the given attribute value.
 *
 * @param testId Test id set by `data-testid`
 *
 */
export function testIdSelector(testId) {
    return `[data-testid="${testId}"]`;
}
/**
 * Emulates a left click on the element with the given `data-testid` attribute.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 */
export function click(fixture, testId) {
    const element = findEl(fixture, testId);
    const event = makeClickEvent(element.nativeElement);
    element.triggerEventHandler('click', event);
}
/**
 * Makes a fake click event that provides the most important properties.
 * Sets the button to left.
 * The event can be passed to DebugElement#triggerEventHandler.
 *
 * @param target Element that is the target of the click event
 */
export function makeClickEvent(target) {
    return {
        preventDefault() { },
        stopPropagation() { },
        stopImmediatePropagation() { },
        type: 'click',
        target,
        currentTarget: target,
        bubbles: true,
        cancelable: true,
        button: 0,
    };
}
/**
 * Finds all elements with the given `data-testid` attribute.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 */
export function findEls(fixture, testId) {
    return fixture.debugElement.queryAll(By.css(testIdSelector(testId)));
}
/**
 * Expects that the element with the given `data-testid` attribute
 * has the given text content.
 *
 * @param fixture Component fixture
 * @param text Expected text
 */
export function expectContainedText(fixture, text) {
    expect(fixture.nativeElement.textContent).toContain(text);
}
/**
 * Expects that a component has the given text content.
 * Both the component text content and the expected text are trimmed for reliability.
 *
 * @param fixture Component fixture
 * @param text Expected text
 */
export function expectContent(fixture, text) {
    expect(fixture.nativeElement.textContent).toBe(text);
}
/**
 * Dispatches a fake event (synthetic event) at the given element.
 *
 * @param element Element that is the target of the event
 * @param type Event name, e.g. `input`
 * @param bubbles Whether the event bubbles up in the DOM tree
 */
export function dispatchFakeEvent(element, type, bubbles = false) {
    const event = document.createEvent('Event');
    event.initEvent(type, bubbles, false);
    element.dispatchEvent(event);
}
/**
 * Enters text into a form field (`input`, `textarea` or `select` element).
 * Triggers appropriate events so Angular takes notice of the change.
 * If you listen for the `change` event on `input` or `textarea`,
 * you need to trigger it separately.
 *
 * @param element Form field
 * @param value Form field value
 */
export function setFieldElementValue(element, value) {
    element.value = value;
    // Dispatch an `input` or `change` fake event
    // so Angular form bindings take notice of the change.
    const isSelect = element instanceof HTMLSelectElement;
    dispatchFakeEvent(element, isSelect ? 'change' : 'input', isSelect ? false : true);
}
/**
 * Sets the value of a form field with the given `data-testid` attribute.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 * @param value Form field value
 */
export function setFieldValue(fixture, testId, value) {
    setFieldElementValue(findEl(fixture, testId).nativeElement, value);
}
/**
 * Checks or unchecks a checkbox or radio button.
 * Triggers appropriate events so Angular takes notice of the change.
 *
 * @param fixture Component fixture
 * @param testId Test id set by `data-testid`
 * @param checked Whether the checkbox or radio should be checked
 */
export function checkField(fixture, testId, checked) {
    const { nativeElement } = findEl(fixture, testId);
    nativeElement.checked = checked;
    // Dispatch a `change` fake event so Angular form bindings take notice of the change.
    dispatchFakeEvent(nativeElement, 'change');
}
//# sourceMappingURL=ngrxCounter.spec.js.map
