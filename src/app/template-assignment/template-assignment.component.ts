import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-template-assignment',
  templateUrl: './template-assignment.component.html',
  styleUrls: ['./template-assignment.component.css']
})
export class TemplateAssignmentComponent implements OnInit {
  layoutSections: number[] = [];
  templates: any[] = [];
  products: any[] = [];
  assignedProducts: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.loadProducts();
    this.loadAssignedProducts();
    this.processTemplates();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }

  loadAssignedProducts(): void {
    this.apiService.getAssignedProducts().subscribe((data: any) => {
      this.assignedProducts = data;
    });
  }

  processTemplates(): void {
    this.templates.forEach(template => {
      template.layoutSections = template.layout_code.split(':').map((str: string) => Number(str));
    });
  }

  createSlots(section: number): any[] {
    return new Array(section).fill(0);
  }

  getProductForSlot(templateId: number, sectionNumber: number): string {
    const assignment = this.assignedProducts.find(
      (item) => item.templateId === templateId && item.sectionNumber === sectionNumber
    );
    return assignment && assignment.productId ? `Product ID: ${assignment.productId}` : 'Empty Slot';
  }
}