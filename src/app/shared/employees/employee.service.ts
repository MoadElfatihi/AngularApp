import { Injectable } from '@angular/core';
import { Employee } from '../../model/employees/employee.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData : Employee;
  listData : any;
  private _refreshNeeded$ = new Subject<void>();
  url ="http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }
  addEmployee(employee : Employee){
    return this.http.post<Employee>(this.url+"/Employees",JSON.stringify(employee),this.httpOptions).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      }   
    )
    ).toPromise().then(data => {
      console.log(data); 
    });
    }

    getEmployee(){
      this.listData = this.http.get<Employee[]>(this.url+"/Employees").pipe();
      return this.listData;
}
}
