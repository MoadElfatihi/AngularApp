import { Injectable } from '@angular/core';
import { Departement } from '../../model/departements/departement.model';
import { HttpClient , HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  formData : Departement;
  url ="http://localhost:3000";
  listData : any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http : HttpClient) { }
  
  getDepartements(){
    this.listData = this.http.get<Departement[]>(this.url+"/Departements").pipe();
    return this.listData;
  }

  addDepartement(departement : Departement){
    this.http.post<Departement>(this.url+"/Departements",JSON.stringify(departement),this.httpOptions).toPromise().then(data=>{
      console.log(data);
    });
  }
}
