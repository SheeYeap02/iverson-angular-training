import {Component} from '@angular/core';
import {DefaultCdComponent} from "../default-cd/default-cd.component";
import {OnpushCdComponent} from "../onpush-cd/onpush-cd.component";

@Component({
	selector: 'app-parent2',
	imports: [
		DefaultCdComponent,
		OnpushCdComponent
	],
	templateUrl: './parent2.component.html',
	styleUrl: './parent2.component.css'
})
export class Parent2Component {
	user = {name: 'Ali'};

	mutateUser() {
		this.user.name = 'Jane Doe';
	}

	replaceUser() {
		this.user = {name: 'John Doe Doe'};
	}

}
