import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employees/employee.service';
import { Employee } from '../../model/employees/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.employees = this.service.getEmployee();
  }

}
