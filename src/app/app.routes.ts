import { Routes } from '@angular/router';
import {OrderListComponent} from "../features/orders/order-list/order-list.component";
import {ThemeToggleComponent} from "../component/theme-toggle/theme-toggle.component";
import {Day3Component} from "../pages/day-3/day-3.component";

export const routes: Routes = [
	// Example of lazy load the route
	// During this first load of the application, the module is not loaded
	// It will only be loaded when the user navigates to the 'products' path
	// When you build the application, the module will be bundled into a separate chunk
	{
		path: 'products',
		loadChildren: ()=>
			import('../features/product/product.module').then(m => m.ProductModule)
	},
	// Example of Eager Load
	// The url will be loaded immediately when the application starts
	// Impact on the load time of opening the application first time (first load)
	{
		path: 'orders',
		component: OrderListComponent
	},
	// lazy load the users module
	{
		path: 'users',
		loadChildren: () =>
			import('../features/users/users.module').then(m => m.UsersModule)
	},
	{
		path: 'day-3',
		component: Day3Component
	}
];
