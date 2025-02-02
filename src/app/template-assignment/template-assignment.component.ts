import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-assignment',
  templateUrl: './template-assignment.component.html',
  styleUrls: ['./template-assignment.component.css'],
})
export class TemplateAssignmentComponent implements OnInit {
  templateId: string | number = '';
  products: any[] = [];
  selectedTemplate: any = null;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.templateId = params.get('id') || '';
      if (!this.templateId) this.router.navigate(['/']);
      this.getTemplateData();
    });
  }

  loadProducts(): void {
    this.apiService.getProducts(this.templateId).subscribe((data: any) => {
      this.processData(data);
    });
  }

  processData(products: any[]) {
    const rows = this.selectedTemplate?.layout_code.split(':');
    if (!rows) this.router.navigate(['/']);
    this.products = rows.map((row: string) => {
      const data = products.splice(0, parseInt(row));
      const arr = new Array(parseInt(row))
        .fill(null)
        .map((v, i) => data[i] || v);
      return arr;
    });
  }

  getTemplateData(): void {
    this.apiService.getTemplateById(this.templateId).subscribe((data: any) => {
      if (!data) this.router.navigate(['/']);
      this.selectedTemplate = data;
      this.loadProducts();
    });
  }
}
