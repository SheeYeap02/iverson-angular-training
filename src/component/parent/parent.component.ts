import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
	selector: 'app-parent',
	imports: [
		ChildComponent
	],
	templateUrl: './parent.component.html',
	styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
	@ViewChild(ChildComponent) childRef!: ChildComponent;

	childMessage = '';

	receiveMessage(message: string) {
		this.childMessage = message;
	}

	ngAfterViewInit() {
		this.childRef.sayHello();
	}

}
