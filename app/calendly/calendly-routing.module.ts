import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendlyPage } from './calendly.page';

const routes: Routes = [
  {
    path: '',
    component: CalendlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendlyPageRoutingModule {}
