import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonBadge, IonSelect, IonSelectOption],
  templateUrl: './employees.page.html',
  styleUrl: './employees.page.scss'
})
export class EmployeesPage {
  private readonly employeeService = inject(EmployeeService);
  readonly employees = this.employeeService.getEmployees();
  readonly departments = this.employeeService.getDepartments();
  search = '';
  department = 'All';

  get filteredEmployees() {
    const term = this.search.trim().toLowerCase();
    return this.employees.filter((employee) => {
      const matchesSearch = !term || [employee.name, employee.employeeId, employee.position, employee.department].some((value) => value.toLowerCase().includes(term));
      const matchesDepartment = this.department === 'All' || employee.department === this.department;
      return matchesSearch && matchesDepartment;
    });
  }
}
