import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarUsuariosPage } from './actualizar-usuarios.page';

describe('ActualizarUsuariosPage', () => {
  let component: ActualizarUsuariosPage;
  let fixture: ComponentFixture<ActualizarUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
