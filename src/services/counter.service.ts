import {computed, Injectable, signal} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterService {
	private _counter = signal(0);
	counter = this._counter.asReadonly();
	doubleCounter = computed(() => this._counter() * 2);

	constructor() { }

	increment() {
		this._counter.update(val => val + 1);
	}

	decrement() {
		this._counter.update(val => val - 1);
	}

	reset() {
		this._counter.set(0);
	}
}
