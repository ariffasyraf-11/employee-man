import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBackButton, IonButtons],
  templateUrl: './employee-detail.page.html'
})
export class EmployeeDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly employeeService = inject(EmployeeService);

  employee?: Employee;
  loading = true;
  error = '';

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getEmployee(id).subscribe({
      next: (response) => {
        this.employee = response.data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load employee details.';
        this.loading = false;
      }
    });
  }
}
