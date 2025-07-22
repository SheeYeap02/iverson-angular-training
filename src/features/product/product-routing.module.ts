import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";

const routes: Routes = [
	{
		path: '',
		component: ProductListComponent
	},
	// Lazy load component when the url matches ':id' / product/1, product/2, etc
	{
		path: 'id',
		loadComponent: () => import('./product-detail/product-detail.component').then(m => m.ProductDetailComponent)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule {}
