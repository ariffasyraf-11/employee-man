export interface Employee {
  id: number;
  employeeId: string;
  name: string;
  position: string;
  department: string;
  unit: string;
  email: string;
  phone: string;
  officeLocation: string;
  status: 'Active' | 'Inactive';
  photo?: string;
}
