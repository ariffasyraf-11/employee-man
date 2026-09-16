import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';
import { Department, Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonSelect, IonSelectOption],
  templateUrl: './employees.page.html',
  styleUrl: './employees.page.scss'
})
export class EmployeesPage {
  private readonly employeeService = inject(EmployeeService);

  employees: Employee[] = [];
  departments: Department[] = [];
  search = '';
  departmentId?: number;
  loading = false;
  error = '';

  constructor() {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.error = '';

    this.employeeService.getEmployees(this.search, this.departmentId).subscribe({
      next: (response) => {
        this.employees = response.data.data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load employees. Make sure the Laravel API is running.';
        this.loading = false;
      }
    });
  }

  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe({
      next: (response) => this.departments = response.data,
      error: () => this.error = 'Unable to load departments.'
    });
  }

  onSearch(): void {
    this.loadEmployees();
  }

  onDepartmentChange(): void {
    this.loadEmployees();
  }
}
