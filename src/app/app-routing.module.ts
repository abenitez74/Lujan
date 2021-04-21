import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sitios',
    loadChildren: () => import('./sitios/sitios.module').then( m => m.SitiosPageModule)
  },
  {
    path: 'sistema',
    loadChildren: () => import('./sistema/sistema.module').then( m => m.SistemaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
