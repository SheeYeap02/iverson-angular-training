import {Component, computed, signal, Signal} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../services/employee.service";
import {EmployeeListItemComponent} from "../employee-list-item/employee-list-item.component";
import {FormsModule} from "@angular/forms";

@Component({
	selector: 'app-employee-list',
	imports: [
		EmployeeListItemComponent,
		FormsModule
	],
	templateUrl: './employee-list.component.html',
	styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

	// employees!: Signal<Employee[]>;
	// To hold the search term in the input field
	searchTerm = signal<string>('');

	// Computed: filtered employees
	// computed() is a reactive function used to derive a new value based on one or more reactive signals.
	// It automatically recalculates when its dependencies change.
	filteredEmployees = computed(() =>
		this.employeeService.employees().filter(emp =>
			emp.name.toLowerCase().includes(this.searchTerm().toLowerCase())
		)
	);

	constructor(private employeeService: EmployeeService) {
		// this.employees = this.employeeService.employees;
	}
}
