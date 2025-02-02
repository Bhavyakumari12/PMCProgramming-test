import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  templates: any[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getTemplateList();
  }

  navigateToTemplate(template: any): void {
    this.router.navigate(['/layout', template.id]);
  }

  getTemplateList(): void {
    this.apiService.getTemplates().subscribe((data: any) => {
      this.templates = data;
    });
  }
}
