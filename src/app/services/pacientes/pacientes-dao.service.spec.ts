import { TestBed } from '@angular/core/testing';

import { PacientesDaoService } from './pacientes-dao.service';

describe('PacientesDaoService', () => {
  let service: PacientesDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientesDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
