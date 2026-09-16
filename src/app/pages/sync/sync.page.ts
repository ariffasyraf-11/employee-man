import { Component, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { syncOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { DatabaseService } from '../../services/database.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-sync',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton, IonIcon],
  templateUrl: './sync.page.html'
})
export class SyncPage {
  private readonly database = inject(DatabaseService);
  private readonly employeeService = inject(EmployeeService);
  status = 'Ready to synchronize';

  constructor() {
    addIcons({ syncOutline });
  }

  async sync(): Promise<void> {
    this.status = 'Synchronizing...';
    await this.database.saveEmployees(this.employeeService.getEmployees());
    this.status = `Sync complete — ${this.employeeService.getEmployees().length} employees cached locally.`;
  }
}
