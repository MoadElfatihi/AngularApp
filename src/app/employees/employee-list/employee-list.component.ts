import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employees/employee.service';
import { Employee } from '../../model/employees/employee.model';
import { EmployeeComponent } from '../employee/employee.component';
@Component({
  providers: [EmployeeComponent],
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees : Employee[];
  mySubscription : any;

  public popoverTitle: string ="delete employe";
  public popoverMessage: string = "Do you want to delete this Employe ?";
  public confirmClicked: boolean;
  public cancelClicked: boolean;

  constructor(private service : EmployeeService, private employeeComp : EmployeeComponent) { 
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
  deleteEmploye(id){
    this.employeeComp.deleteEmploye(id);
  }

}
