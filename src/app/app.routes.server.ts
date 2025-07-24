import {RenderMode, ServerRoute} from '@angular/ssr';

// Define the strategy for rendering
// ** -> by default all is Pre-render
// options: Server (SSR), Pre-render (SSG), Client (CSR)
// For SSR, run with the command: npm run serve:ssr:ssr-lab
export const serverRoutes: ServerRoute[] = [
	{
		path: '',
		renderMode: RenderMode.Prerender
	},
	{
		path: 'about',
		renderMode: RenderMode.Prerender
	},
	{
		path: 'articles',
		renderMode: RenderMode.Prerender
	},
	{
		path: '**',
		renderMode: RenderMode.Server
	},
];
