import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private api: ApiService) {}

  getJobs() {
    return this.api.get('https://remotive.com/api/remote-jobs');
  }
}
