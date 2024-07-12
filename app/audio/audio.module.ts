import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioPageRoutingModule } from './audio-routing.module';

import { AudioPage } from './audio.page';
import { AudioActividadComponent } from '../audio-actividad/audio-actividad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioPageRoutingModule
  ],
  declarations: [AudioPage, AudioActividadComponent]
})
export class AudioPageModule {}
