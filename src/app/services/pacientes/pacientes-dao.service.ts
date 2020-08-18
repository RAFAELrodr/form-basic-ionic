import { Injectable } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesDaoService {

  private pacientes: Paciente[] = [];

  constructor() { }

  findAll(): Paciente[] {
    return this.pacientes;
  }

  save(paciente: Paciente): Paciente[] {
    this.pacientes.push(paciente);
    return this.pacientes;
  }
}
