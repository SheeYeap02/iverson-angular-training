import {Component, effect, signal} from '@angular/core';

@Component({
	selector: 'app-zoneless-angular',
	imports: [],
	templateUrl: './zoneless-angular.component.html',
	styleUrl: './zoneless-angular.component.css'
})
export class ZonelessAngularComponent {
	// Plain variable (non-reactive)
	plainCount = 0;
	// Signal variable (reactive)
	signalCount = signal(0);

	// To simulate async process with setTimeout
	// and incrementing the plainCount variable after 1 sec
	constructor() {
		setTimeout(() => {
			this.plainCount++;
			this.signalCount.update(val => val + 1);
			console.log('plainCount in setTimeout is incremented to: ', this.plainCount, '| signal:', this.signalCount())
		}, 1000);

		setInterval(() => {
			this.plainCount++;
			this.signalCount.update(val => val + 1);
			console.log('plainCount in setInterval is incremented to: ', this.plainCount, '| signal:', this.signalCount())
		}, 1000);

		Promise.resolve().then(() => {
			this.plainCount++;
			this.signalCount.update(val => val + 1);
			console.log('plainCount in Promise is incremented to: ', this.plainCount, '| signal:', this.signalCount());
		});

		// native DOM event
		setTimeout(() => {
			// const btn = document.getElementById('native-button');
			// if (btn) {
			// 	btn.addEventListener('click', () => {
			// 		this.plainCount++;
			// 		this.signalCount.update(val => val + 1);
			// 		console.log('plainCount in native event listener is incremented to:', this.plainCount, '| signal:', this.signalCount());
			// 	});
			// }
		});

		// Observe reactivity
		effect(() => {
			console.log('Signal changed to:', this.signalCount());
		});
	}

	getPlainCount() {
		return this.plainCount; // use method to avoid caching
	}

	incrementPlainCount() {
		this.plainCount++;
		console.log('plainCount incremented by (click) to:', this.plainCount);
	}

	incrementBoth() {
		this.plainCount++;
		this.signalCount.update(v => v + 1);
		console.log('Manual click - plain:', this.plainCount, '| signal:', this.signalCount());
	}

}
