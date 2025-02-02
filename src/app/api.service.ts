import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProducts(templateId?: number | string): Observable<any> {
    const params: { templateId?: number | string } = {};
    if (templateId) params.templateId = templateId;
    return this.http.get(`${this.apiUrl}/products`, { params });
  }

  getTemplates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/templates`);
  }

  getTemplateById(templateId: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/templates/${templateId}`);
  }
}
