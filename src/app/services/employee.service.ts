import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api.config';
import { DashboardStats, Department, Employee, PaginatedResponse } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = API_BASE_URL;

  getEmployees(search = '', departmentId?: number): Observable<{ data: PaginatedResponse<Employee> }> {
    let params = new HttpParams();

    if (search.trim()) {
      params = params.set('search', search.trim());
    }

    if (departmentId !== undefined) {
      params = params.set('department_id', departmentId);
    }

    return this.http.get<{ data: PaginatedResponse<Employee> }>(`${this.apiUrl}/employees`, { params });
  }

  getEmployee(id: number): Observable<{ data: Employee }> {
    return this.http.get<{ data: Employee }>(`${this.apiUrl}/employees/${id}`);
  }

  getDepartments(): Observable<{ data: Department[] }> {
    return this.http.get<{ data: Department[] }>(`${this.apiUrl}/departments`);
  }

  getDashboard(): Observable<{ data: DashboardStats }> {
    return this.http.get<{ data: DashboardStats }>(`${this.apiUrl}/dashboard`);
  }
}
