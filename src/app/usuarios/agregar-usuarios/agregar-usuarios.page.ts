import { Component, OnInit } from '@angular/core';
import { IUsuarios } from 'src/app/interfaces/iusuarios';
import { SUsuariosService } from 'src/app/servicios/susuarios.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.page.html',
  styleUrls: ['./agregar-usuarios.page.scss'],
})
export class AgregarUsuariosPage implements OnInit {

  nuevoUsuario: IUsuarios = {
    id: 0,
    nombreUsuario: '',
    nombres: '',
    apellidos: '',
    edad: 0,
    correo: '',
    contrasena: '',
    conductor: false
  };
  

  constructor(private usuarioServ: SUsuariosService) { }

  ngOnInit() {
  }

  registrarUsuario(){
    this.usuarioServ.crearUsuario(this.nuevoUsuario).subscribe();
  }

}
