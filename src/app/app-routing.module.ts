import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-usuarios',
    loadChildren: () => import('./usuarios/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },
  {
    path: 'agregar-usuarios',
    loadChildren: () => import('./usuarios/agregar-usuarios/agregar-usuarios.module').then( m => m.AgregarUsuariosPageModule)
  },
  {
    path: 'actualizar-usuarios',
    loadChildren: () => import('./usuarios/actualizar-usuarios/actualizar-usuarios.module').then( m => m.ActualizarUsuariosPageModule)
  },
  {
    path: 'eliminar-usuarios',
    loadChildren: () => import('./usuarios/eliminar-usuarios/eliminar-usuarios.module').then( m => m.EliminarUsuariosPageModule)
  },
  {
    path: 'mostrar-usuario',
    loadChildren: () => import('./usuarios/mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
