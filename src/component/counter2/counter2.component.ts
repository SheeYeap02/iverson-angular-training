import {Component, inject} from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
	selector: 'app-counter2',
	imports: [],
	templateUrl: './counter2.component.html',
	styleUrl: './counter2.component.css'
})
export class Counter2Component {

	constructor(public counterService: CounterService) {}
}
