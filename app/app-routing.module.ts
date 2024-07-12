import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'intro-leccion',
    loadChildren: () => import('./intro-leccion/intro-leccion.module').then( m => m.IntroLeccionPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'cuestionario',
    loadChildren: () => import('./cuestionario/cuestionario.module').then( m => m.CuestionarioPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'agendar-llamada',
    loadChildren: () => import('./agendar-llamada/agendar-llamada.module').then( m => m.AgendarLlamadaPageModule)
  },
  {
    path: 'calendly',
    loadChildren: () => import('./calendly/calendly.module').then( m => m.CalendlyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
