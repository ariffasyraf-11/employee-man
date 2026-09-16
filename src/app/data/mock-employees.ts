import { Employee } from '../models/employee.model';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 1,
    employeeId: 'EMP001',
    name: 'Ahmad Faizal',
    position: 'Senior System Analyst',
    department: 'Information Technology',
    unit: 'Application Development',
    email: 'ahmad.faizal@example.com',
    phone: '03-8000 1001',
    officeLocation: 'Block A, Level 3',
    status: 'Active'
  },
  {
    id: 2,
    employeeId: 'EMP002',
    name: 'Nur Aina',
    position: 'System Developer',
    department: 'Information Technology',
    unit: 'Application Development',
    email: 'nur.aina@example.com',
    phone: '03-8000 1002',
    officeLocation: 'Block A, Level 3',
    status: 'Active'
  },
  {
    id: 3,
    employeeId: 'EMP003',
    name: 'Mohd Rizal',
    position: 'Accountant',
    department: 'Finance',
    unit: 'Accounts Unit',
    email: 'mohd.rizal@example.com',
    phone: '03-8000 1003',
    officeLocation: 'Block B, Level 2',
    status: 'Active'
  },
  {
    id: 4,
    employeeId: 'EMP004',
    name: 'Siti Hajar',
    position: 'Human Resource Officer',
    department: 'Human Resources',
    unit: 'Employee Services',
    email: 'siti.hajar@example.com',
    phone: '03-8000 1004',
    officeLocation: 'Block B, Level 1',
    status: 'Active'
  },
  {
    id: 5,
    employeeId: 'EMP005',
    name: 'Daniel Lee',
    position: 'Network Engineer',
    department: 'Information Technology',
    unit: 'Infrastructure',
    email: 'daniel.lee@example.com',
    phone: '03-8000 1005',
    officeLocation: 'Block A, Level 2',
    status: 'Inactive'
  }
];
