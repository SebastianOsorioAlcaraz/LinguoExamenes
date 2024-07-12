import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendlyPageRoutingModule } from './calendly-routing.module';

import { CalendlyPage } from './calendly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendlyPageRoutingModule
  ],
  declarations: [CalendlyPage]
})
export class CalendlyPageModule {}
