import {Component, input} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
	selector: 'app-employee-list-item',
	imports: [],
	templateUrl: './employee-list-item.component.html',
	styleUrl: './employee-list-item.component.css'
})
export class EmployeeListItemComponent {

	// Input property to receive the employee data from the parent component
	// input (with small i_ is used to define an input property in Angular that supports signal
	employee = input<Employee>();

	constructor(private employeeService: EmployeeService) {

	}

	deleteEmployee(id?: number) {
		console.log(`Delete employee with id: ${id}`);
		this.employeeService.deleteEmployee(id);
	}

}
