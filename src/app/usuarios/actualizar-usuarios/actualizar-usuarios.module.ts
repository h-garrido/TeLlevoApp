import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarUsuariosPageRoutingModule } from './actualizar-usuarios-routing.module';

import { ActualizarUsuariosPage } from './actualizar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarUsuariosPageRoutingModule
  ],
  declarations: [ActualizarUsuariosPage]
})
export class ActualizarUsuariosPageModule {}
