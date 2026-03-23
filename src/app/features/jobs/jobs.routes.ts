import { Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';

export const JOBS_ROUTES: Routes = [
  {
    path: '',
    component: JobListComponent
  }
];