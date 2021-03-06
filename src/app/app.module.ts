import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employees/employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartementsComponent } from './departements/departements.component';
import { DepartementComponent } from './departements/departement/departement.component';
import { DepartementListComponent } from './departements/departement-list/departement-list.component';
import { DepartementService } from './shared/departements/departement.service';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

const appRoutes: Routes = [
  {path:'employee-list',component: EmployeeListComponent },
  {path:'departements',component: DepartementsComponent },
  {path:'employees',component: EmployeesComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartementsComponent,
    DepartementComponent,
    DepartementListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes,{enableTracing: true}),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType : 'danger'
    })
  ],
  providers: [EmployeeService,DepartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
