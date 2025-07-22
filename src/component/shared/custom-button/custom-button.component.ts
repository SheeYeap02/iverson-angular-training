import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-custom-button',
	imports: [],
	templateUrl: './custom-button.component.html',
	styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
	@Input() label = 'Click';
	@Input() type: 'button' | 'submit' = 'button';

	handleClick() {
		console.log(`Custom button clicked: ${this.label}`);
	}

}
