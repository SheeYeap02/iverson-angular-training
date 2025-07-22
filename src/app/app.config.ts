import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {CoreModule} from "../core/core.module";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes),
		provideClientHydration(withEventReplay()),
		provideHttpClient(),
		importProvidersFrom(CoreModule)			// Have the service to be used through out the application
	]
};
