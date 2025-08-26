import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormComponent } from './form';
describe('FormComponent', () => {
    // @ts-ignore
    let component;
    // @ts-ignore
    let fixture;
    // @ts-ignore
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [FormComponent], // standalone component
        }).compileComponents();
        fixture = TestBed.createComponent(FormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('devrait créer le composant', () => {
        // @ts-ignore
        expect(component).toBeTruthy();
    });
    it('devrait contenir le formulaire avec les champs requis', () => {
        // @ts-ignore
        const formElement = fixture.debugElement.query(By.css('form'));
        expect(formElement).toBeTruthy();
        // @ts-ignore
        const nameInput = fixture.debugElement.query(By.css('input[name="nom"]'));
        // @ts-ignore
        const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
        // @ts-ignore
        const avisTextarea = fixture.debugElement.query(By.css('textarea[name="avis"]'));
        expect(nameInput).toBeTruthy();
        expect(emailInput).toBeTruthy();
        expect(avisTextarea).toBeTruthy();
    });
    // @ts-ignore
    it('devrait afficher une erreur si le champ email est vide et touché', () => __awaiter(void 0, void 0, void 0, function* () {
        // @ts-ignore
        const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
        emailInput.dispatchEvent(new Event('blur'));
        // @ts-ignore
        fixture.detectChanges();
        // @ts-ignore
        yield fixture.whenStable();
        // @ts-ignore
        const errorMessage = fixture.debugElement.query(By.css('div *ngIf'));
        // @ts-ignore
        expect(component.email).toBe('');
        // @ts-ignore
        expect(fixture.nativeElement.textContent).toContain("L'adresse email est obligatoire");
    }));
    // @ts-ignore
    it('devrait mettre à jour les valeurs du modèle via l’interface utilisateur', () => __awaiter(void 0, void 0, void 0, function* () {
        // @ts-ignore
        const nameInput = fixture.debugElement.query(By.css('input[name="nom"]')).nativeElement;
        // @ts-ignore
        const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
        // @ts-ignore
        const avisInput = fixture.debugElement.query(By.css('textarea[name="avis"]')).nativeElement;
        nameInput.value = 'Jean';
        emailInput.value = 'jean@example.com';
        avisInput.value = 'Ceci est un avis';
        nameInput.dispatchEvent(new Event('input'));
        emailInput.dispatchEvent(new Event('input'));
        avisInput.dispatchEvent(new Event('input'));
        // @ts-ignore
        fixture.detectChanges();
        // @ts-ignore
        yield fixture.whenStable();
        // @ts-ignore
        expect(component.nom).toBe('Jean');
        // @ts-ignore
        expect(component.email).toBe('jean@example.com');
        // @ts-ignore
        expect(component.avis).toBe('Ceci est un avis');
    }));
    it('devrait appeler onSubmit lors du clic sur le bouton', () => {
        // @ts-ignore
        spyOn(component, 'onSubmit');
        // @ts-ignore
        const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
        submitButton.click();
        // @ts-ignore
        expect(component.onSubmit).toHaveBeenCalled();
    });
});
//# sourceMappingURL=form.spec.js.map
