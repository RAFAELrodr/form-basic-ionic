import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesCreatePage } from './pacientes-create.page';

const routes: Routes = [
  {
    path: '',
    component: PacientesCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientesCreatePageRoutingModule {}
