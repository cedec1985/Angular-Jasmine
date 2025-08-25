import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormComponent } from './form';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent], // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait créer le composant', () => {
    expect(component).toBeTruthy();
  });

  it('devrait contenir le formulaire avec les champs requis', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();

    const nameInput = fixture.debugElement.query(By.css('input[name="nom"]'));
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    const avisTextarea = fixture.debugElement.query(By.css('textarea[name="avis"]'));

    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(avisTextarea).toBeTruthy();
  });

  it('devrait afficher une erreur si le champ email est vide et touché', async () => {
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;

    emailInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    await fixture.whenStable();

    const errorMessage = fixture.debugElement.query(By.css('div *ngIf'));
    expect(component.email).toBe('');
    expect(fixture.nativeElement.textContent).toContain("L'adresse email est obligatoire");
  });

  it('devrait mettre à jour les valeurs du modèle via l’interface utilisateur', async () => {
    const nameInput = fixture.debugElement.query(By.css('input[name="nom"]')).nativeElement;
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]')).nativeElement;
    const avisInput = fixture.debugElement.query(By.css('textarea[name="avis"]')).nativeElement;

    nameInput.value = 'Jean';
    emailInput.value = 'jean@example.com';
    avisInput.value = 'Ceci est un avis';

    nameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    avisInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.nom).toBe('Jean');
    expect(component.email).toBe('jean@example.com');
    expect(component.avis).toBe('Ceci est un avis');
  });

  it('devrait appeler onSubmit lors du clic sur le bouton', () => {
    spyOn(component, 'onSubmit');

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    submitButton.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});

