import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';
import { Department } from '../../models/employee.model';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge],
  templateUrl: './departments.page.html'
})
export class DepartmentsPage {
  private readonly employeeService = inject(EmployeeService);
  departments: Department[] = [];
  loading = true;
  error = '';

  constructor() {
    this.employeeService.getDepartments().subscribe({
      next: (response) => {
        this.departments = response.data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load departments.';
        this.loading = false;
      }
    });
  }
}
