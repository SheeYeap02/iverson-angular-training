import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'day-1',
		loadComponent: () =>
			import('../pages/day-1/day-1.component').then(m => m.Day1Component)
	},
	{
		path: 'day-2',
		// loadComponent: () =>
		// 	import('../pages/day-2/day-2.component').then(m => m.Day2Component),
		loadChildren: () =>
			import('../pages/day-2/day-2.module').then(m => m.Day2Module)
	},
	{
		path: 'day-3',
		loadComponent: () =>
			import('../pages/day-3/day-3.component').then(m => m.Day3Component)
	},
	{
		path: 'day-4',
		loadComponent: () =>
			import('../pages/day-4/day-4.component').then(m => m.Day4Component)
	},
	{
		path: '',
		loadComponent: () =>
			import('../pages/home/home.component').then(m => m.HomeComponent)
	},
	{
		path: 'about',
		loadComponent: () =>
			import('../pages/about/about.component').then(m => m.AboutComponent)
	},
	{
		path: 'articles',
		loadComponent: () =>
			import('../pages/articles/articles.component').then(m => m.ArticlesComponent)
	}
];
