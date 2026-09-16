import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge],
  templateUrl: './departments.page.html'
})
export class DepartmentsPage {
  private readonly employeeService = inject(EmployeeService);
  readonly employees = this.employeeService.getEmployees();
  readonly departments = this.employeeService.getDepartments();

  count(department: string): number {
    return this.employees.filter((employee) => employee.department === department).length;
  }
}
