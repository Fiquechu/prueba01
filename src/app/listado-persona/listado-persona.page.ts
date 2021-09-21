import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.page.html',
  styleUrls: ['./listado-persona.page.scss'],
})
export class ListadoPersonaPage implements OnInit {
  personas = []

  constructor(private personasServicio: PersonasService, private router: Router) { }

  ngOnInit() {
    this.personas = this.personasServicio.getPersonas();

  }
  ionViewWillEnter() {
    this.personas = this.personasServicio.getPersonas();
  }
  agregar()
  {
    this.router.navigate(['/ingresar'])
  }

}
