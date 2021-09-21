import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPersonaPageRoutingModule } from './listado-persona-routing.module';

import { ListadoPersonaPage } from './listado-persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPersonaPageRoutingModule
  ],
  declarations: [ListadoPersonaPage]
})
export class ListadoPersonaPageModule {}
