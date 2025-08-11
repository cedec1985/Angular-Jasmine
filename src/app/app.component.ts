import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsStockLimited } from './directives/structural/is-stock-limited';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly title = signal('testdemo');

  flag3 = false;
  colorA = 'darkblue';
  colorB = 'darkslategrey';
  //
  dataClasse4 = 'maClasse4';
  //
  flag5 = false;
  //
  flag6 = false;
  //
  flag71 = false;
  flag72 = false;
  //
  color = 'yellow';

  changeStyle3() {
    this.flag3 = !this.flag3;
  }

  changeClasse6() {
    this.flag6 = !this.flag6;
  }

  nb1 = 4;
  nb2 = 12;        // ces valeurs sont bien souvent récupérées en interrogeant une API REST

  isok = true;

  elems = [4, 9, 'toto', 12];
  numbs: Array<number> = [10, 50, 6, 18, 32, ];




}
