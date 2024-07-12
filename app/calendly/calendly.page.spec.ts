import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendlyPage } from './calendly.page';

describe('CalendlyPage', () => {
  let component: CalendlyPage;
  let fixture: ComponentFixture<CalendlyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
