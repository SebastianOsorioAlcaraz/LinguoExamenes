import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarLlamadaPage } from './agendar-llamada.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarLlamadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarLlamadaPageRoutingModule {}
