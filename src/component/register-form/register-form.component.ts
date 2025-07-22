import {Component, OnInit} from '@angular/core';
import {
	AbstractControl,
	AsyncValidatorFn,
	FormArray,
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	ValidationErrors,
	Validators
} from "@angular/forms";
import {delay, map, Observable, of} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
	selector: 'app-register-form',
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './register-form.component.html',
	styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {
	registerForm!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			username: ['', {
				validators: [Validators.required, Validators.minLength(3)],
				asyncValidators: [this.usernameTakenValidator()],
				updateOn: 'blur'
			}],
			emails: this.fb.array([
				this.fb.control('', [Validators.required, Validators.email])
			])
		});
	}

	get emails(): FormArray {
		return this.registerForm.get('emails') as FormArray;
	}

	addEmail(): void {
		this.emails.push(this.fb.control('', [Validators.required, Validators.email]));
	}

	removeEmail(index: number): void {
		this.emails.removeAt(index);
	}

	usernameTakenValidator(): AsyncValidatorFn {
		const takenUsernames = ['admin', 'user', 'test'];
		return (control: AbstractControl): Observable<ValidationErrors | null> => {
			return of(takenUsernames.includes(control.value)).pipe(
				delay(1000),
				map(isTaken => isTaken ? {usernameTaken: true} : null)
			);
		};
	}

	onSubmit(): void {
		console.log(this.registerForm.value);
	}

}
