import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage) },
  { path: 'employees', loadComponent: () => import('./pages/employees/employees.page').then((m) => m.EmployeesPage) },
  { path: 'employees/:id', loadComponent: () => import('./pages/employee-detail/employee-detail.page').then((m) => m.EmployeeDetailPage) },
  { path: 'departments', loadComponent: () => import('./pages/departments/departments.page').then((m) => m.DepartmentsPage) },
  { path: 'sync', loadComponent: () => import('./pages/sync/sync.page').then((m) => m.SyncPage) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage) },
  { path: '**', redirectTo: 'dashboard' }
];
