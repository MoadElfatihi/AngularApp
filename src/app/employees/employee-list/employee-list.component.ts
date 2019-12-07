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
  mySubscription : any;
  constructor(private service : EmployeeService) { 
  }

  ngOnInit() {
    this.service.refreshNeeded$.subscribe(() => {
      this.getEmployee();
    });
    this.getEmployee();
  }
  getEmployee(){
    this.employees = this.service.getEmployee();
  }
  deleteEmploye(){
    
  }

}
