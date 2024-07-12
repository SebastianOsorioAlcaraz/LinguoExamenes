import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarLlamadaPageRoutingModule } from './agendar-llamada-routing.module';

import { AgendarLlamadaPage } from './agendar-llamada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarLlamadaPageRoutingModule
  ],
  declarations: [AgendarLlamadaPage]
})
export class AgendarLlamadaPageModule {}
