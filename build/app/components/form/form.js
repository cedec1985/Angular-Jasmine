import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
let FormComponent = class FormComponent {
    nom = '';
    email = '';
    avis = '';
    submitted = false; // Indique si le formulaire a été soumis
    successMessage = '';
    errorMessage = '';
    formRef;
    onSubmit() {
        this.submitted = true; // Active les messages de retour
        this.successMessage = '';
        this.errorMessage = '';
        // Vérifie si le formulaire est invalide
        if (this.formRef.invalid) {
            // Le formulaire contient des erreurs de validation
            this.errorMessage = 'Le formulaire contient des erreurs. Veuillez les corriger.';
            // Les erreurs sont déjà affichées dans le template via les directives *ngIf
            return;
        }
        console.log(`Nom: ${this.nom}`);
        console.log(`Email: ${this.email}`);
        console.log(`Avis: ${this.avis}`);
        //Ici on peut envoyer les données à un service ou à une API
        this.successMessage = 'Formulaire soumis avec succès !';
        // Réinitialiser le formulaire
        this.formRef.resetForm();
    }
};
__decorate([
    ViewChild('formRef')
], FormComponent.prototype, "formRef", void 0);
FormComponent = __decorate([
    Component({
        selector: 'app-form',
        standalone: true,
        imports: [FormsModule, ReactiveFormsModule, CommonModule],
        template: `
    <form #formRef="ngForm" (ngSubmit)="onSubmit()">
      <label for="name">Nom :</label>
      <input
        type="text"
        [(ngModel)]="nom"
        [ngModelOptions]="{ updateOn: 'blur' }"
        name="nom"
        id="nom"
        required
        #nomRef="ngModel"
      />
      <div NgIf="nomRef.invalid && nomRef.touched">
        <div NgIf="nomRef.errors?.required">Le nom est obligatoire</div>
      </div>
      <br />

      <label for="email">Email :</label>
      <input
        type="email"
        [(ngModel)]="email"
        [ngModelOptions]="{ updateOn: 'blur' }"
        name="email"
        id="email"
        required
        #emailRef="ngModel"
      />
      <div NgIf="emailRef.invalid && emailRef.touched">
        <div NgIf="emailRef.errors?.required">L'adresse email est obligatoire</div>
        <div NgIf="emailRef.errors?.email">L'adresse email n'est pas valide</div>
      </div>
      <br />

      <label for="avis">Avis :</label>
      <textarea
        [(ngModel)]="avis"
        [ngModelOptions]="{ updateOn: 'blur' }"
        name="avis"
        id="avis"
        required
        #avisRef="ngModel"
      ></textarea>
      <div NgIf="avisRef.invalid && avisRef.touched">
        <div NgIf="avisRef.errors?.required">L'avis est obligatoire</div>
      </div>
      <br />

      <button type="submit">Soumettre</button>
    </form>

    <div NgIf="submitted && successMessage" style="color: green; margin-top: 10px;">
      {{ successMessage }}
    </div>
    <div NgIf="submitted && errorMessage" style="color: red; margin-top: 10px;">
      {{ errorMessage }}
    </div>
  `,
        styles: [],
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.js.map