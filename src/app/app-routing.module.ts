import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'casa',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'popovers',
    loadChildren: () => import('./popovers/popovers.module').then( m => m.PopoversPageModule)
  },
  {
    path: 'segments',
    loadChildren: () => import('./segments/segments.module').then( m => m.SegmentsPageModule)
  },
  {
    path: 'accordions',
    loadChildren: () => import('./accordions/accordions.module').then( m => m.AccordionsPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
  },
  {
    path: 'reorders',
    loadChildren: () => import('./reorders/reorders.module').then( m => m.ReordersPageModule)
  },
  {
    path: 'toasts',
    loadChildren: () => import('./toasts/toasts.module').then( m => m.ToastsPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
