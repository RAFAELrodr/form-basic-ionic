import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pacientes-list',
    loadChildren: () => import('./pages/pacientes/pacientes-list/pacientes-list.module').then( m => m.PacientesListPageModule)
  },
  {
    path: 'pacientes-create',
    loadChildren: () => import('./pages/pacientes/pacientes-create/pacientes-create.module').then( m => m.PacientesCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
