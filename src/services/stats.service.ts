import {Injectable, signal} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StatsService {
	value = signal(0);

	constructor() { }

	// Simulate an async operation or delay to mimic a real-world scenario
	// and to demonstrate that signal will capture the change in zoneless mode
	update() {
		setTimeout(() => {
			this.value.set(42);		// only the dependent component will update
		}, 1000);
	}

}
