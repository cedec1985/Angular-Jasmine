import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-service-counter-component3',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './service-counter-component3.html',
  styleUrl: './service-counter-component3.css'
})
export class ServiceCounterComponent3 implements OnInit {

 id! : string; // on initialise id à null ou à une chaîne de caractères
  // id est une variable qui va contenir la valeur de : servcount3Id dans l'URL : /service-counter/servcount3Id
  // on peut aussi utiliser un type plus spécifique comme number, mais ici on utilise String pour simplifier

  // on importe ActivatedRoute pour pouvoir accéder aux paramètres de la route actuelle

 constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.id = params.get('servcount3Id') || ''; // récupère la valeur de servcount3Id dans l'URL
    });
  }
}
