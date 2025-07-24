import {RenderMode, ServerRoute} from '@angular/ssr';

// Define the strategy for rendering
// ** -> by default all is Pre-render
// options: Server (SSR), Pre-render (SSG - static-site generation), Client (CSR)
// Rendering speed: SSG > SSR > CSR (may display a white page and then static content before being fully rendered with the data on request call on client side)
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
