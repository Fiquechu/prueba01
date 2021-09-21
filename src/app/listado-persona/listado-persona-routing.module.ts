import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPersonaPage } from './listado-persona.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPersonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPersonaPageRoutingModule {}
