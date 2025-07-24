import {inject, Injectable, makeStateKey, TransferState} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

// Similar concept to Local Storage (Browser Cache)
const ARTICLES_KEY = makeStateKey<any[]>('articles');

@Injectable({
	providedIn: 'root'
})
export class ArticlesService {
	private httpClient = inject(HttpClient);
	private transferState = inject(TransferState);

	constructor() { }

	getArticles() {
		// If data already stored inside TransferState
		if (this.transferState.hasKey(ARTICLES_KEY)) {
			const data = this.transferState.get<any[]>(ARTICLES_KEY, []);
			this.transferState.remove(ARTICLES_KEY);
			return data;
		}

		// If the data is not there, retrieve it from the url and save it in TransferState
		return this.httpClient.get<any>(
			'https://jsonplaceholder.typicode.com/posts'
		).pipe(
			// After retrieval, save the data in TransferState
			tap(data => this.transferState.set(ARTICLES_KEY, data))
		);
	}
}
