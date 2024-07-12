import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarraVerticalResponsiveComponent } from './barra-vertical-responsive.component';

describe('BarraVerticalResponsiveComponent', () => {
  let component: BarraVerticalResponsiveComponent;
  let fixture: ComponentFixture<BarraVerticalResponsiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraVerticalResponsiveComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarraVerticalResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
