import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacientesDaoService } from 'src/app/services/pacientes/pacientes-dao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-create',
  templateUrl: './pacientes-create.page.html',
  styleUrls: ['./pacientes-create.page.scss'],
})
export class PacientesCreatePage implements OnInit {

  private data: any = {};

  constructor(private pacienteDao: PacientesDaoService, private router: Router) { }

  ngOnInit() {
  }

  doConfirmar(): void {
    // console.log(this.data);
    const paciente: Paciente = Paciente.parse(this.data);
    paciente.toString();

    this.pacienteDao.save(paciente);
    this.router.navigate(['']);
  }

  doLimpar(): void {
    this.data = {};
  }

}
