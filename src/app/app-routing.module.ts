import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ani1',
    loadChildren: () => import('./pages/ani1/ani1.module').then( m => m.Ani1PageModule)
  },
  {
    path: 'ani2',
    loadChildren: () => import('./pages/ani2/ani2.module').then( m => m.Ani2PageModule)
  },
  {
    path: 'ani3',
    loadChildren: () => import('./pages/ani3/ani3.module').then( m => m.Ani3PageModule)
  },
  {
    path: 'ani4',
    loadChildren: () => import('./pages/ani4/ani4.module').then( m => m.Ani4PageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQRPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'lector-qr',
    loadChildren: () => import('./pages/lector-qr/lector-qr.module').then( m => m.LectorQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
