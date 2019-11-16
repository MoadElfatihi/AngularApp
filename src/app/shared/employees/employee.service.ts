import { Injectable } from '@angular/core';
import { Employee } from '../../model/employees/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData : Employee;
  constructor() { }
}
