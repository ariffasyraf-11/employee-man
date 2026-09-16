import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

/**
 * SQLite-ready abstraction. Native SQLite wiring will be added in the next prototype stage.
 */
@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private employees: Employee[] = [];

  async saveEmployees(employees: Employee[]): Promise<void> {
    this.employees = [...employees];
  }

  async getEmployees(): Promise<Employee[]> {
    return [...this.employees];
  }

  async clear(): Promise<void> {
    this.employees = [];
  }
}
