import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuestionarioPageRoutingModule } from './cuestionario-routing.module';

import { CuestionarioPage } from './cuestionario.page';
import { CuestionarioComponenteComponent } from '../cuestionario-componente/cuestionario-componente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuestionarioPageRoutingModule
  ],
  declarations: [CuestionarioPage, CuestionarioComponenteComponent]
})
export class CuestionarioPageModule {}
