import {Component, inject} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
	selector: 'app-product',
	imports: [],
	templateUrl: './product.component.html',
	styleUrl: './product.component.css'
})
export class ProductComponent {
	private productService = inject(ProductService);
	products = this.productService.getProducts();

}
