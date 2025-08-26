// @ts-nocheck
import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
let FormComponent = class FormComponent {
    /**
   * @param {any} counterApiService
   */
    constructor(counterApiService) {
        this.counterApiService = counterApiService;
        this.nom = '';
        this.email = '';
        this.avis = '';
      this.formRef = '';
    }
    onSubmit() {
        console.log(`Nom: ${this.nom}`);
        console.log(`Email: ${this.email}`);
        console.log(`Avis: ${this.avis}`);
        //Ici on peut envoyer les données à un service ou à une API
        if (this.formRef.invalid) {
            console.warn('Le formulaire contient des erreurs :', this.formRef.controls);
            Object.values(this.formRef.controls).forEach((control) => {
                control.markAsTouched();
            });
        }
        else {
            const formData = {
                nom: this.nom,
                email: this.email,
                avis: this.avis
            };
            // Sauvegarde dans le stockage local
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Données sauvegardées localement.');
            // Envoyer vers une API
            this.counterApiService.envoyerFormulaire(formData).subscribe({
                next: (/** @type {any} */ response) => {
                    console.log('Formulaire envoyé avec succès à l’API :', response);
                },
                error: (/** @type {any} */ error) => {
                    console.error('Erreur lors de l’envoi à l’API :', error);
                }
            });
        }
    }
};
__decorate([
    ViewChild('formRef')
], FormComponent.prototype, "formRef", void 0);
FormComponent = __decorate([
    Component({
        selector: 'app-form',
        standalone: true,
        imports: [FormsModule],
        template: `
    <form #formRef ="ngForm">
      <label for ="name">Nom :</label>
      <input type="text" [(ngModel)]="nom" [ngModelOptions]="{updateOn: 'blur'}" name="nom" id ="nom" required>
      <br>
      <label for ="email">Email :</label>
      <input type="email" [(ngModel)]="email" [ngModelOptions]="{updateOn: 'blur'}" name="email" id="email" required  #emailRef="ngModel">
      <div *ngIf="emailRef.invalid && emailRef.touched">
      <div *ngIf="emailRef.errors.required">L'adresse email est obligatoire</div>
      </div>
      <br>
      <label for ="avis">Avis :</label>
      <textarea [(ngModel)]="avis" [ngModelOptions]="{updateOn: 'blur'}" name="avis" id="avis" required></textarea>
      <br>
      <button type="submit" (click)="onSubmit()">Soumettre</button>
    </form>
  `,
        styles: []
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.js.map
