import { Injectable } from '@angular/core';
import { Employee } from '../../model/employees/employee.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData : Employee;
  listData : any;
  url ="http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  addEmployee(employee : Employee){
    return this.http.post<Employee>(this.url+"/Employees",JSON.stringify(employee),this.httpOptions).toPromise().then(data => {
      console.log(data); 
    });
    }

    getEmployee(){
      this.listData = this.http.get<Employee[]>(this.url+"/Employees").pipe();
      return this.listData;
}
}
