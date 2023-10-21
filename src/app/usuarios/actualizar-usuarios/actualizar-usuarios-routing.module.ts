import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarUsuariosPage } from './actualizar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarUsuariosPageRoutingModule {}
