import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'hot-reload',
    loadChildren: () => import('./pages/hot-reload/hot-reload.module').then(m => m.HotReloadPageModule)
  },
  {
    path: 'realtime-change',
    loadChildren: () => import('./pages/realtime-change/realtime-change.module').then(m => m.RealtimeChangePageModule)
  },
  {
    path: 'learn-css',
    loadChildren: () => import('./pages/learn-css/learn-css.module').then(m => m.LearnCssPageModule)
  },
  {
    path: 'storage-control',
    loadChildren: () => import('./pages/storage-control/storage-control.module').then(m => m.StorageControlPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
