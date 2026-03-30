import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input() job!: any;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigate(['/jobs', this.job.id]);
  }


}
