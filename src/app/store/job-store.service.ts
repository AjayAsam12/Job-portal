import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobStoreService {
  constructor(private http : HttpClient){}
  private jobsSubject = new BehaviorSubject<any[]>([]);
  jobs$ = this.jobsSubject.asObservable();

  setJobs(jobs: any[]) {
    this.jobsSubject.next(jobs);
  }


  getJobById(id: number) {
    return this.http
      .get<any>('https://remotive.com/api/remote-jobs')
      .pipe(
        map(res => res.jobs.find((job: { id: number; }) => job.id === id))
      );
  }
}
