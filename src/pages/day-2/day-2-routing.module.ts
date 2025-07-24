import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderListComponent} from "../../features/orders/order-list/order-list.component";
import {Day2Component} from "./day-2.component";

const routes: Routes = [
	{
		path: '',
		component: Day2Component,
	},
	// lazy load the users module
	{
		path: 'users',
		loadChildren: () =>
			import('../../features/users/users.module').then(m => m.UsersModule)
	},
	// Example of lazy load the route
	// During this first load of the application, the module is not loaded
	// It will only be loaded when the user navigates to the 'products' path
	// When you build the application, the module will be bundled into a separate chunk
	{
		path: 'products',
		loadChildren: ()=>
			import('../../features/product/product.module').then(m => m.ProductModule)
	},
	// Example of Eager Load
	// The url will be loaded immediately when the application starts
	// Impact on the load time of opening the application first time (first load)
	{
		path: 'orders',
		component: OrderListComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class Day2RoutingModule {}
