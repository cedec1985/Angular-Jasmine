import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {
 message:string ="Oups, page non trouvée !"
}
