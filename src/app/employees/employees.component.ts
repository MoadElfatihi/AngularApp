import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  isCollapsed : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  
  viewAddemploye(){
    this.isCollapsed = !this.isCollapsed;
  }

}
