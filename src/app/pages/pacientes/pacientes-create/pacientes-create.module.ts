import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesCreatePageRoutingModule } from './pacientes-create-routing.module';

import { PacientesCreatePage } from './pacientes-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesCreatePageRoutingModule
  ],
  declarations: [PacientesCreatePage]
})
export class PacientesCreatePageModule {}
