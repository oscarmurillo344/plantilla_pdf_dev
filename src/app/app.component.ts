import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-cabecera></app-cabecera>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
