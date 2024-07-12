import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroLeccionPageRoutingModule } from './intro-leccion-routing.module';

import { IntroLeccionPage } from './intro-leccion.page';
import { BarraHorizontalTareasComponent } from '../barra-horizontal-tareas/barra-horizontal-tareas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroLeccionPageRoutingModule
  ],
  declarations: [IntroLeccionPage, BarraHorizontalTareasComponent]
})
export class IntroLeccionPageModule {}
