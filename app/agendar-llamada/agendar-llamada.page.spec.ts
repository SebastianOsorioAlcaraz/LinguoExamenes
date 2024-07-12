import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarLlamadaPage } from './agendar-llamada.page';

describe('AgendarLlamadaPage', () => {
  let component: AgendarLlamadaPage;
  let fixture: ComponentFixture<AgendarLlamadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarLlamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
