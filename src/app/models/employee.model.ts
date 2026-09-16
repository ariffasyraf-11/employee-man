export interface Employee {
  id: number;
  employee_no: string;
  name: string;
  email: string | null;
  phone: string | null;
  position: string | null;
  photo: string | null;
  status: boolean;
  department_id: number;
  department: Department;
}

export interface Department {
  id: number;
  name: string;
  description: string | null;
}

export interface PaginatedResponse<T> {
  current_page: number;
  data: T[];
  last_page: number;
  per_page: number;
  total: number;
}

export interface DashboardStats {
  total_employees: number;
  total_departments: number;
}
