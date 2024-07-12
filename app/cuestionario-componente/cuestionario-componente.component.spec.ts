import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuestionarioComponenteComponent } from './cuestionario-componente.component';

describe('CuestionarioComponenteComponent', () => {
  let component: CuestionarioComponenteComponent;
  let fixture: ComponentFixture<CuestionarioComponenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioComponenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuestionarioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
