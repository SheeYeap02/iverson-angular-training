import {Component, OnInit} from '@angular/core';
import {CounterStaticService} from "../../services/state/counter-static.service";
import {CounterStoreService} from "../../services/state/counter-store.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
	selector: 'app-counter',
	imports: [
		AsyncPipe
	],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
	// Local state
	count = 0;

	// Global state using RxJS
	countRx$!: Observable<number>;

	constructor(
		public staticCounter: CounterStaticService,
		private rxStore: CounterStoreService
	) {}

	ngOnInit() {
		this.countRx$ = this.rxStore.count$;
	}

	incStatic() {
		this.staticCounter.increment();
	}

	decStatic() {
		this.staticCounter.decrement();
	}

	incRx() {
		this.rxStore.increment();
	}

	decRx() {
		this.rxStore.decrement();
	}

	increment() {
		this.count++;
	}

	decrement() {
		this.count--;
	}

}
