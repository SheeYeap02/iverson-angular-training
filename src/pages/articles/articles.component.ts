import {Component, inject, OnInit, signal} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";


// You now have a dynamic page using SSR + TransferState + Signals!
// 1. When a user requests /articles, your Node.js server executes your Angular application.
// 2. The ArticlesService fetches the article data from the API while running on the server.
// 3. This fetched data is then stored in TransferState.
// 4. The server renders the Articles component (using the data from the service) into static HTML, including the TransferState data embedded within a <script> tag.
// 5. This pre-rendered HTML is sent to the user's browser.
// 6. The browser immediately displays the content of the /articles page.
// 7. Once the JavaScript bundle loads, the client-side Angular application "hydrates" – it takes over the already rendered HTML.
// 8. The ArticlesService on the client-side first checks TransferState. Since the data is already there, it retrieves it from TransferState instead of making a new HTTP request.
// 9. The articles signal in your component is initialized with this data, and the application becomes fully interactive without any noticeable re-rendering or flickering.

interface Article {
	userId: number;
	title: string;
	id: number;
	body: string;
}

@Component({
	selector: 'app-articles',
	imports: [],
	templateUrl: './articles.component.html',
	styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
	private service = inject(ArticlesService);
	articles = signal<Article[]>([]);

	ngOnInit() {
		const result = this.service.getArticles();

		if (Array.isArray(result)) {
			this.articles.set(result);
		} else {
			// Set articles to be the data retrieved from API
			result.subscribe(data => this.articles.set(data));
		}
	}
}
