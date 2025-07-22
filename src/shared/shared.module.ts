import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CapitalizePipe} from "../pipe/shared/capitalize.pipe";
import {HighlightDirective} from "../directives/shared/highlight.directive";
import {CustomButtonComponent} from "../component/shared/custom-button/custom-button.component";


@NgModule({
	declarations: [],
	// Declare components, pipes, and directives that belong to this module
	imports: [
		CommonModule,
		CustomButtonComponent,
		CapitalizePipe,
		HighlightDirective
	],
	// Export to allow other components/modules to use it
	exports: [
		CustomButtonComponent,
		CapitalizePipe,
		HighlightDirective,
		CommonModule
	]
})
export class SharedModule {}
