import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
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
export class FormComponent {
  nom: string = '';
  email: string = '';
  avis: string = '';

  @ViewChild('formRef') formRef!: NgForm;
  onSubmit() {
    console.log(`Nom: ${this.nom}`);
    console.log(`Email: ${this.email}`);
    console.log(`Avis: ${this.avis}`);
    //Ici on peut envoyer les données à un service ou à une API
    if (this.formRef.invalid) {
      // Le formulaire contient des erreurs de validation
      // Affichez les erreurs de validation ici
    } else {
      // Le formulaire est valide, envoyez-le ou faites ce que vous avez besoin de faire
    }
  }
}
