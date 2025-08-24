// @ts-nocheck
import { By } from '@angular/platform-browser';
/**
 * "Spec helpers" pour un accès au DOM
 * Retourne un sélecteur pour l'attribut data-testid avec la valeur donnée.
 * @param {any} testId Test id = data-testid pour le test
 */
export function testIdSelector(testId) {
    return `[data-testid="${testId}"]`;
}
/**
 * Trouver un élément unique du composant qui se rapporte au sélecteur CSS
 * Lancer une erreur si cet élément n'est pas trouvé.
 * @param {{ debugElement: { query: (arg0: import("@angular/core").Predicate<import("@angular/core").DebugElement>) => any; }; }} fixture
 * @param {string} selector sélecteur CSS
 */
export function queryByCss(fixture, selector) {
    // Le type de retour de DebugElement#query() est déclaré DebugElement,
    // Mais le type de retour actuel est DebugElement ou Null.
    const debugElement = fixture.debugElement.query(By.css(selector));
    // Echoue si l'élément n'existe pas donc le type de retour est toujours debugElement.
    if (!debugElement) {
        throw new Error(`queryByCss: Element with ${selector} not found`);
    }
    return debugElement;
}
/**
 * Trouver un élément unique du composant qui se rapporte à data-testid
 * Lancer une erreur si cet élément n'est pas trouvé
 * @param {any} fixture
 * @param {any} testId attribut de test pour testId
 */
export function findEl(fixture, testId) {
    return queryByCss(fixture, testIdSelector(testId));
}
/**
 * Trouver les éléments du composant qui ont pour attribut data-testid.
 * @param {{ debugElement: { queryAll: (arg0: import("@angular/core").Predicate<import("@angular/core").DebugElement>) => any; }; }} fixture
 * @param {any} testId Attribut de test pour data-testid
 */
export function findEls(fixture, testId) {
    return fixture.debugElement.queryAll(By.css(testIdSelector(testId)));
}
/**
 * Obtenir un élément de type texte pour l'attribut donné data-testid.
 * @param {any} fixture
 * @param {any} testId Attribut de test pour data-testid
 */
export function getText(fixture, testId) {
    return findEl(fixture, testId).nativeElement.textContent;
}
/**
 * S'attendre à ce que l'attribut donné data-testid indique le même contenu de texte.
 * @param {any} fixture
 * @param {any} testId Attribut de test pour data-testid
 * @param {any} text texte attendu
 */
export function expectText(fixture, testId, text) {
    expect(getText(fixture, text)).toBe(text);
}
/**
 * S'attendre à ce que l'attribut donné data-testid indique le même contenu de texte.
 * @param {{ nativeElement: { textContent: any; }; }} fixture
 * @param {any} text texte attendu
 */
export function expectContainedText(fixture, text) {
    expect(fixture.nativeElement.textContent).toContain(text);
}
/**
 * S'attendre à ce que le composant comporte le même contenu de texte.
 * @param {{ nativeElement: { textContent: any; }; }} fixture
 * @param {any} text texte attendu
 */
export function expectContent(fixture, text) {
    expect(fixture.nativeElement.textContent).toBe(text);
}
/**
 * Dispatche un "fake event" à l'élément donné.
 * @param {{ dispatchEvent: (arg0: Event) => void; }} element élément cible de "event"
 * @param {string} type nom de l' "event"
 * @param bubbles si l'élément est visible dans le DOM
 */
export function dispatchFakeEvent(element, type, bubbles = false) {
    const event = document.createEvent('Event');
    event.initEvent(type, bubbles, false);
    element.dispatchEvent(event);
}
/**
 * Rentre un texte dans le champ du formulaire (`input`, `textarea` ou `select').
 * Déclenche les événements appropriés pour que Angular remarque le changement.
 * @param {{ value: any; }} element Champ de formulaire
 * @param {any} value La valeur du champ
 */
export function setFieldElementValue(element, value) {
    element.value = value;
    //  fake event
    const isSelect = element instanceof HTMLSelectElement;
    dispatchFakeEvent(element, isSelect ? 'change' : 'input');
}
/**
 * Mettre une valeur pour le champ du formulaire qui correspond à l'attribut data-testid donné.
 * @param {any} fixture
 * @param {any} testId
 * @param {any} value
 */
export function setFieldValue(fixture, testId, value) {
    setFieldElementValue(findEl(fixture, testId).nativeElement, value);
}
/**
 * Contrôle ou non un radio button ou un checkbox
 * Déclenche les événements appropriés pour que Angular remarque le changement
 * @param {any} fixture
 * @param {any} testId
 * @param {any} checked Contrôler on non
 */
export function checkField(fixture, testId, checked) {
    const { nativeElement } = findEl(fixture, testId);
    nativeElement.checked = checked;
    dispatchFakeEvent(nativeElement, 'change');
}
/**
 * Réaliser un "fake event" sur un événement cliquer
 * Mets le bouton à gauche
 * l'événement est passé à la méthode triggerEventHandler.
 * @param {any} target
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
 * Emuler un clique gauche
 * @param {any} fixture
 * @param {any} testId
 */
export function click(fixture, testId) {
    const element = findEl(fixture, testId);
    const event = makeClickEvent(element.nativeElement);
    element.triggerEventHandler('click', event);
}
/**
 * @param {any} fixture
 * @param {any} selector
 */
export function findComponent(fixture, selector) {
    return queryByCss(fixture, selector);
}
/**
 * @param {{ debugElement: { queryAll: (arg0: import("@angular/core").Predicate<import("@angular/core").DebugElement>) => any; }; }} fixture
 * @param {string} selector
 */
export function findComponents(fixture, selector) {
    return fixture.debugElement.queryAll(By.css(selector));
}
//# sourceMappingURL=spec.helpers.component.js.map
