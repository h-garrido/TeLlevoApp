import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarUsuarioPage } from './mostrar-usuario.page';

describe('MostrarUsuarioPage', () => {
  let component: MostrarUsuarioPage;
  let fixture: ComponentFixture<MostrarUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MostrarUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
