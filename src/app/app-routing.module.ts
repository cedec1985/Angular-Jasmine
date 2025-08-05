import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter-component';
import { Homecomponent } from './components/home/homecomponent/homecomponent';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Homecomponent },
  { path: 'counter-component', component: CounterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
