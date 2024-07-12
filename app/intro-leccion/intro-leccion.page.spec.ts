import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroLeccionPage } from './intro-leccion.page';

describe('IntroLeccionPage', () => {
  let component: IntroLeccionPage;
  let fixture: ComponentFixture<IntroLeccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroLeccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
