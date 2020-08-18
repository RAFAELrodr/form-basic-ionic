import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacientesDaoService } from 'src/app/services/pacientes/pacientes-dao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.page.html',
  styleUrls: ['./pacientes-list.page.scss'],
})
export class PacientesListPage implements OnInit {

  private data: any;
  private pacientes: Paciente[] = [];

  constructor(
    private pacienteDao: PacientesDaoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.data = params;
    });
   }

  ngOnInit() {
    console.log(this.data);

    this.doCarregar();
  }

  doCarregar(): void {
    this.pacientes = this.pacienteDao.findAll();
  }

}
