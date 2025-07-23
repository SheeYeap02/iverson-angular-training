import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class CounterStoreService {
	private _count = new BehaviorSubject<number>(0);
	count$: Observable<number> = this._count.asObservable();

	doubleCounter$: Observable<number> = new Observable(observer => {
		this._count.subscribe(value => {
			observer.next(value * 2);
		})
	});

	constructor() { }

	increment() {
		this._count.next(this._count.value + 1);
	}

	decrement() {
		this._count.next(this._count.value - 1);
	}

}
