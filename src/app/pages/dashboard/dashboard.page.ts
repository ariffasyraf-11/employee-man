import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { peopleOutline, businessOutline, syncOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonIcon, IonButton],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {
  private readonly employeeService = inject(EmployeeService);

  totalEmployees = 0;
  totalDepartments = 0;
  loading = true;
  error = '';

  constructor() {
    addIcons({ peopleOutline, businessOutline, syncOutline });

    this.employeeService.getDashboard().subscribe({
      next: (response) => {
        this.totalEmployees = response.data.total_employees;
        this.totalDepartments = response.data.total_departments;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load dashboard data.';
        this.loading = false;
      }
    });
  }
}
