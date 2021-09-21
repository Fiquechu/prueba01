import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
// hacemos un arreglo de "Persona"
  private personas : Persona[] = [
    {
      id      : 1,
      nombre  : 'Alegre',
      clave    : "macoy123",
      foto    : 'https://puu.sh/I8pKn/7aa92d46e8.jpg'
    },
    {
      id      : 2,
      nombre  : 'Felicia',
      clave    : "kitty22",
      foto    : 'https://puu.sh/I8pMg/b9a35501a9.jpg'
    }

  ]

  constructor() { }

// CRUD
  getPersonas()
  { // devuelve todas los user de la lista
    return this.personas
  }

  getPersona(id: number)
  { // devuelve al user segun id
    return this.personas.find(x=> {return x.id == id})
  }


  deletePersona(id : number)
  {
    this.personas = this.personas.filter(x => {return x.id !=id})
  }

  addPersona(nombre: string, clave: string, foto: string)
  { // agrega a un nuevo user
    this.personas.push(
      {
        id      : this.personas.length + 1,
        nombre  : nombre,
        clave   : clave,
        foto    : foto
      }
    )
  }

}
