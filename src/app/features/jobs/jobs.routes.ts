import { Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';

export const JOBS_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/job-list/job-list.component')
            .then(m => m.JobListComponent)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/job-detail/job-detail.component')
            .then(m => m.JobDetailComponent)
      }
    ]
  }
];