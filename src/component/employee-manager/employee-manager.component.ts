import { Component } from '@angular/core';
import {EmployeeAddComponent} from "../employee-add/employee-add.component";
import {EmployeeListComponent} from "../employee-list/employee-list.component";

@Component({
  selector: 'app-employee-manager',
  imports: [
    EmployeeAddComponent,
    EmployeeListComponent
  ],
  templateUrl: './employee-manager.component.html',
  styleUrl: './employee-manager.component.css'
})
export class EmployeeManagerComponent {

}
