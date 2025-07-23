import {Component, OnInit, Signal} from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
	selector: 'app-counter-view',
	imports: [],
	templateUrl: './counter-view.component.html',
	styleUrl: './counter-view.component.css'
})
export class CounterViewComponent implements OnInit {

	// ! -> It will be initialized
	// Type is Signal (capital)
	// When we initialize it, it is signal() -> small s
	counter!: Signal<number>;

	constructor(private counterService: CounterService) {}

	ngOnInit() {
		// Expose the signal to the template
		// retrieve reference to the Signal -> no bracket
		// retrieve value -> bracket
		this.counter = this.counterService.counter;
	}

	increment() {
		this.counterService.increment();
	}

	decrement() {
		this.counterService.decrement();
	}

}
