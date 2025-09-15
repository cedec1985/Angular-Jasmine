import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormComponent } from './form.mjs';
describe('FormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule], // Importe les modules nécessaires pour ngModel
            declarations: [FormComponent], // Déclare le composant à tester
        }).compileComponents();
        fixture = TestBed.createComponent(FormComponent); // Crée une instance du composant pour les tests
        component = fixture.componentInstance; // Récupère l'instance du composant
        fixture.detectChanges(); // Déclenche la détection des changements
    }));
    it('devrait créer le composant', () => {
        expect(component).toBeTruthy(); // Vérifie que le composant est bien créé
    });
    it('devrait afficher une erreur si le champ email est vide après blur', () => __awaiter(void 0, void 0, void 0, function* () {
        const emailInput = fixture.debugElement.query(By.css('#email')).nativeElement;
        emailInput.dispatchEvent(new Event('blur')); // Simule la perte de focus
        fixture.detectChanges(); // Met à jour la vue
        const errorMsg = fixture.debugElement.query(By.css('div div')); // Recherche le message d'erreur
        expect(errorMsg).toBeTruthy(); // Vérifie que le message d'erreur s'affiche
        expect(errorMsg.nativeElement.textContent).toContain("L'adresse email est obligatoire"); // Vérifie le contenu du message
    }));
    it('devrait ne pas afficher d\'erreur si le champ email est rempli correctement', () => {
        const emailInput = fixture.debugElement.query(By.css('#email')).nativeElement;
        emailInput.value = 'test@example.com'; // Donne une valeur correcte
        emailInput.dispatchEvent(new Event('input')); // Simule une saisie
        emailInput.dispatchEvent(new Event('blur')); // Simule la perte de focus
        fixture.detectChanges(); // Met à jour la vue
        const errorMsg = fixture.debugElement.query(By.css('div div'));
        expect(errorMsg).toBeNull(); // Vérifie qu'aucune erreur ne s'affiche
    });
    it('devrait appeler onSubmit() lors du clic sur le bouton', () => {
        spyOn(component, 'onSubmit'); // Espionne la méthode onSubmit
        const button = fixture.debugElement.query(By.css('button')).nativeElement;
        button.click(); // Simule un clic sur le bouton
        expect(component.onSubmit).toHaveBeenCalled(); // Vérifie que la méthode est appelée
    });
    it('devrait afficher les données dans la console si le formulaire est valide', () => {
        // Remplit les champs du formulaire avec des données valides
        component.nom = 'Jean Dupont';
        component.email = 'jean@example.com';
        component.avis = 'Très bon service';
        fixture.detectChanges();
        // Simule la soumission du formulaire
        spyOn(console, 'log'); // Espionne console.log
        component.formRef = {
            invalid: false
        };
        component.onSubmit();
        // Vérifie que les logs sont appelés avec les bonnes données
        expect(console.log).toHaveBeenCalledWith('Nom: Jean Dupont');
        expect(console.log).toHaveBeenCalledWith('Email: jean@example.com');
        expect(console.log).toHaveBeenCalledWith('Avis: Très bon service');
    });
    it('ne devrait pas soumettre si le formulaire est invalide', () => {
        // Donne un formulaire invalide
        component.formRef = {
            invalid: true
        };
        spyOn(console, 'log');
        component.onSubmit();
        // Vérifie qu'aucune donnée n’est loggée
        expect(console.log).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=form.spec.js.map
