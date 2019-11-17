import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../shared/departements/departement.service';
import { Departement } from '../../model/departements/departement.model';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {
  departements : Departement[];
  constructor(private service : DepartementService) {
   }

  ngOnInit() {
    this.departements = this.service.getDepartements();
  }

}
