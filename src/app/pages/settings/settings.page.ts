import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle],
  templateUrl: './settings.page.html'
})
export class SettingsPage {}
