import {effect, Injectable, signal} from '@angular/core';
import {Employee} from "../model/employee";

@Injectable({
	providedIn: 'root'
})
export class EmployeeService {
	// signal that will hold the list of employees
	// For encapsulation, we will not expose the signal directly
	// Instead, we will expose a readonly version of the signal
	private _employees = signal<Employee[]>([]);
	employees = this._employees.asReadonly();

	// signal that will hold the last id used
	// everytime we add a new employee, we will increment this id => update
	private _lastId = signal<number>(1);

	constructor() {
		// Log effect when list changes
		effect(() => {
			console.log('Employee list changed:', this.employees());
		});

		// Bonus: Alert when list reaches 5 employees
		effect(() => {
			if (this.employees().length === 5) {
				alert('🎉 5 employees reached!');
			}
		});
	}

	addEmployee(name: string, department: string) {
		const newEmployee: Employee = {
			id: this._lastId(),
			name: name,
			department: department
		};

		this._lastId.update(prev => prev + 1);

		this._employees.update(prev => [...prev, newEmployee]);
	}

	deleteEmployee(id?: number) {
		this._employees.update(prev => prev.filter(val => val.id !== id));
	}
}
