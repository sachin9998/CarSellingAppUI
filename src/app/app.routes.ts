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
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/tabs/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'add-post',
        loadComponent: () =>
          import('./pages/tabs/add-post/add-post.page').then(
            (m) => m.AddPostPage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/tabs/profile/profile.page').then(
            (m) => m.ProfilePage
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/tabs/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./pages/tabs/chat/chat.page').then((m) => m.ChatPage),
      },
    ],
  },
];
