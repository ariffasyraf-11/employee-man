import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBackButton, IonButtons],
  templateUrl: './employee-detail.page.html'
})
export class EmployeeDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly employeeService = inject(EmployeeService);
  readonly employee = this.employeeService.getEmployee(Number(this.route.snapshot.paramMap.get('id')));
}
