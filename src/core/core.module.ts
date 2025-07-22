import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "./auth.service";


@NgModule({
	providers: [AuthService],
	declarations: [],
	imports: [
		CommonModule
	]
})
export class CoreModule {
	// Verification that this module can only be imported from app.config.ts or main.ts
	constructor(@Optional() @SkipSelf() parent: CoreModule) {
		if (parent) {
			throw new Error('CoreModule should only be imported in AppModule!');
		}
	}
}
