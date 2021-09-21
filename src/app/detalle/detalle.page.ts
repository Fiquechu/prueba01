import { Component, OnInit } from '@angular/core';
// permite la captura de datos desde otra pagina
import { ActivatedRoute, Router } from '@angular/router';
// importar el modelo
import { Persona } from '../persona.model';
// importar servicio
import {PersonasService} from '../personas.service';
// importar alertControl
import { AlertController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  persona : Persona
  constructor(
    private activatedRouter : ActivatedRoute,
    private personasService : PersonasService,
    private router          : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id') // es de tipo string
      this.persona = this.personasService.getPersona(Number(id));
    })
  }
  async eliminar()
  {
    //Crea una alerta
    const alertElement = await this.alertController.create({
      header  : "¿Seguro de eliminar al usuario?",
      message : "Confirmar",
      buttons : [
        {
          text: "No",
          role: "cancel"
        },
        {
          text  : "Si",
          handler: () => {
            this.personasService.deletePersona(this.persona.id);
            this.router.navigateByUrl("/listado-persona");
          }
        }
      ]

    })
    await alertElement.present();
  }

}

