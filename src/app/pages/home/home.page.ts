import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  doCriarPaciente(): void {
    this.router.navigate(['pacientes-create']);
  }

  doListar(): void {
    const extras: NavigationExtras = {
      queryParams: {
        curso: 'ADS',
        admin: true
      }
    };
    this.router.navigate(['pacientes-list'], extras);
  }
}
