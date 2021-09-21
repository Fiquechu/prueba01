import { Component, OnInit } from '@angular/core';
// importar el sevicio
import { PersonasService } from '../personas.service';
// Para redireccionar al usuario
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(private personasService : PersonasService,
              private router : Router
    ) { }

  ngOnInit() {
  }
  
  guardar(nombre :HTMLInputElement, clave :HTMLInputElement, url :HTMLInputElement)
  {
    const nom = nombre.value;
    const cla = clave.value;
    const img = url.value;
// aca falta un IF
    this.personasService.addPersona(nom, cla, img);
    this.router.navigate(['/listado-persona']);     
  }

}
