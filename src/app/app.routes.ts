import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        loadChildren: () =>
          import('./features/jobs/jobs.routes').then(m => m.JOBS_ROUTES)
      },
    //   {
    //     path: 'login',
    //     loadChildren: () =>
    //       import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    //   },
    //   {
    //     path: 'profile',
    //     loadChildren: () =>
    //       import('./features/profile/profile.routes').then(m => m.PROFILE_ROUTES)
    //   }

];
