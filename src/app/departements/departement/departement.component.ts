import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../shared/departements/departement.service';
import { NgForm } from'@angular/forms';
import { Departement } from '../../model/departements/departement.model';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  
  constructor(private service: DepartementService) { }

  ngOnInit() {
  }
  resetForm(form ? : NgForm){
    if(form !=null)
      form.reset();
    this.service.formData = {
      id : null,
      name : null,
      description : null,
      code  : null
    } 
  }
  onSubmit(form : NgForm){
    let data = form.value;
    this.service.addDepartement(data);
    this.resetForm();
  }
}
