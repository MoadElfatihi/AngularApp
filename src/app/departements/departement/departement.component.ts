import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../shared/departements/departement.service';
import { NgForm } from'@angular/forms';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  
  constructor(private service: DepartementService) { }

  ngOnInit() {
    this.reset();
  }
  reset(forms ? : NgForm){
    if(forms !=null)
      forms.resetForm();
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
    this.reset();
  }
}
