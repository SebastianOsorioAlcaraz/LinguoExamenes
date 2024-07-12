import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarraHorizontalTareasComponent } from './barra-horizontal-tareas.component';

describe('BarraHorizontalTareasComponent', () => {
  let component: BarraHorizontalTareasComponent;
  let fixture: ComponentFixture<BarraHorizontalTareasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraHorizontalTareasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarraHorizontalTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
