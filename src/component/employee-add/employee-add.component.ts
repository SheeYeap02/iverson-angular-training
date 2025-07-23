import {Component, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
	selector: 'app-employee-add',
	imports: [
		FormsModule
	],
	templateUrl: './employee-add.component.html',
	styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
	employees = signal<Employee[]>([]);
	name = signal('');
	department = signal('');
	searchTerm = signal('');

	nextId = signal(1); // For simple ID generation

	constructor(private employeeService: EmployeeService) {}

	addEmployee() {
		this.employeeService.addEmployee(this.name(), this.department());
		// Reset the input fields after adding the employee
		this.name.set('');
		this.department.set('');
	}

}
