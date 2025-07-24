import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";

export interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
}

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private httpClient = inject(HttpClient);

	constructor() { }

	getProducts() {
		// Transform an observable into a signal using toSignal
		return toSignal(
			this.httpClient.get<Product[]>("https://fakestoreapi.com/products"),
			{ initialValue: [] }
		);
	}
}
