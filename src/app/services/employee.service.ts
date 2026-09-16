import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { MOCK_EMPLOYEES } from '../data/mock-employees';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly employees = MOCK_EMPLOYEES;

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    return this.employees.find((employee) => employee.id === id);
  }

  getDepartments(): string[] {
    return [...new Set(this.employees.map((employee) => employee.department))];
  }
}
