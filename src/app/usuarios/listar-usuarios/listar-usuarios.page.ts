import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IUsuarios } from 'src/app/interfaces/iusuarios';
import { SUsuariosService } from 'src/app/servicios/susuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage {

  usuarios: IUsuarios [] = [];

  constructor(private usuarioServ: SUsuariosService, private loadingCtrl: LoadingController) {}

  ionViewWillEnter(){
    this.loadUsuarios()
  }
  

  async loadUsuarios(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'bubbles'
      }
    );
    await loading.present();

    this.usuarioServ.listarUsuarios().subscribe(
      (respuesta) => {
        loading.dismiss();
        let listString = JSON.stringify(respuesta)
        this.usuarios = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
