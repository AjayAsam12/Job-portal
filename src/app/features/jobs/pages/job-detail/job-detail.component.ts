import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobStoreService } from '../../../../store/job-store.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'] 
})
export class JobDetailComponent {
  job!: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: JobStoreService,
  ) {}

  ngOnInit() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // console.log(id)
    // this.store.jobs$.subscribe(jobs => {
    //   if (!jobs || jobs.length === 0) return; 
    //   this.job = jobs.find(j => j.id === id);
    // });



    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.store.jobs$.subscribe(jobs => {
      if (jobs && jobs.length > 0) {
        this.job = jobs.find(j => j.id === id);
      } else {
       
        this.store.getJobById(id).subscribe(job => {
          this.job = job;
        });
      }
    });
  }
}
