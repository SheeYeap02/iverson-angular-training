import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-child',
	imports: [],
	templateUrl: './child.component.html',
	styleUrl: './child.component.css'
})
export class ChildComponent {
	@Input() message: string = '';
	@Output() notify = new EventEmitter<string>();

	sendMessage() {
		this.notify.emit('Message from Child!');
	}

	sayHello() {
		console.log('Hello from Child Component!');
	}

}
