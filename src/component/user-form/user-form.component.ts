import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
	selector: 'app-user-form',
	imports: [
		FormsModule
	],
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.css',
	// Most of the time, dumb component is marked as OnPush [Form]
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
	name: string = '';
	@Output() add = new EventEmitter<string>();

	constructor() { }

	addClicked() {
		this.add.emit(this.name);
		this.name = ''; // Reset the input field after adding
	}
}
