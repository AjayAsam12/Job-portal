import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { JobStoreService } from '../../../../store/job-store.service';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from '../../components/job-card/job-card.component';
// import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-job-list',
  standalone: true,  
  imports: [CommonModule,JobCardComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
  jobs: any[] = [];

  constructor(
    private jobService: JobService,
    private store: JobStoreService
  ) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe((res: any) => {
      this.store.setJobs(res.jobs);
    });

    this.store.jobs$.subscribe(data => {
      this.jobs = data;
    });
  }
}
