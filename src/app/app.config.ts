import {
	ApplicationConfig,
	importProvidersFrom,
	provideExperimentalZonelessChangeDetection,
	provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {CoreModule} from "../core/core.module";
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
	providers: [
		// Day 1 and Day 2 - ZoneChangeDetection
		// provideZoneChangeDetection({eventCoalescing: true}),
		// Day 4 - Zoneless
		provideExperimentalZonelessChangeDetection(),

		provideRouter(routes),
		// Process of changing angular core to HTML code
		// So it can be pre-rendered or Server-rendered (rendered upon request)
		provideClientHydration(withEventReplay()),
		provideHttpClient(withFetch()),
		importProvidersFrom(CoreModule),			// Have the service to be used through out the application
	]
};
