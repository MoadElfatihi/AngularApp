import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employees/employee.service';
import { NgForm } from'@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.reset();
  }
  reset(forms? : NgForm){
    if(forms != null)
    forms.resetForm();
    this.service.formData = {
      id : null,
      fullName : null,
      position : null,
      empCode : null,
      mobile : null,

    }
  }
}
