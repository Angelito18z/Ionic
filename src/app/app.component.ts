  import { Component } from '@angular/core';
  import { addIcons } from 'ionicons';
  import { homeOutline } from 'ionicons/icons'; // Opcional: Importar íconos predeterminados

  @Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false,
  })
  export class AppComponent {
    constructor() { addIcons({
      'home-outline': homeOutline, // Opcional: Íconos estándar de Ionicons
    });}
  }
