import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PacientesCreatePage } from './pacientes-create.page';

describe('PacientesCreatePage', () => {
  let component: PacientesCreatePage;
  let fixture: ComponentFixture<PacientesCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
