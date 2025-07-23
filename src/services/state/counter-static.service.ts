import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CounterStaticService {

	count: number = 0;
	doubleCounter: number = 1;

	constructor() { }

	increment() {
		this.count++;
		this.doubleCounter *= 2;
	}

	decrement() {
		this.count--;
		this.doubleCounter /= 2;
	}

	getValue() {
		return this.count;
	}

	getDoubleValue() {
		return this.doubleCounter;
	}

	reset() {
		this.count = 0;
		this.doubleCounter = 0;
	}

}
