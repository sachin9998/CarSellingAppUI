import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/tabs/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'add-post',
    loadComponent: () => import('./pages/tabs/add-post/add-post.page').then( m => m.AddPostPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/tabs/profile/profile.page').then( m => m.ProfilePage)
  },
];
