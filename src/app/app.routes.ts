import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'verify',
    loadComponent: () => import('./verify/verify.page').then(m => m.VerifyPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then(m => m.CadastroPage),
  },

  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./onboarding/onboarding.page').then((m) => m.OnboardingPage),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'gastos',
        loadComponent: () => import('./gastos/gastos.page').then((m) => m.GastosPage),
      },
      {
        path: 'metas',
        loadComponent: () => import('./metas/metas.page').then((m) => m.MetasPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./perfil/perfil.page').then((m) => m.PerfilPage),
      },
      {
        path: 'feed',
        loadComponent: () => import('./feed/feed.page').then( m => m.FeedPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  
];
