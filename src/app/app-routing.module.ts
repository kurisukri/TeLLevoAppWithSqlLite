import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGardService } from './services/auth-gard.service';



const routes: Routes = [
 
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
    path: 'perfil-user',
    loadChildren: () => import('./perfil-user/perfil-user.module').then( m => m.PerfilUserPageModule),
    canActivate: [AuthGardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recover-password',
    loadChildren: () => import('./recover-password/recover-password.module').then( m => m.RecoverPasswordPageModule)
  },
  {
    path: 'convenio',
    loadChildren: () => import('./convenio/convenio.module').then( m => m.ConvenioPageModule),
    canActivate: [AuthGardService]
    
  },
  {
    path: '',
    loadChildren: () => import('./no-autorizado/no-autorizado.module').then( m => m.NoAutorizadoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule),
    
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
