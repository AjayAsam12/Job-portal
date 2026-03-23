import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"jobs",
        pathMatch:"full"
    },
    // {
    //     path:"jobs",
    //     loadChildren:()=>
    //         import('./features/jobs/jobs.routes').then(m => m.JOBS_ROUTES)
    // },

];
