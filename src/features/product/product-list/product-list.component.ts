import {Component} from '@angular/core';
import {CustomButtonComponent} from "../../../component/shared/custom-button/custom-button.component";
import {CapitalizePipe} from "../../../pipe/shared/capitalize.pipe";
import {CommonModule, NgFor} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {AuthService} from "../../../core/auth.service";

@Component({
	selector: 'app-product-list',
	imports: [
		CommonModule,
		CustomButtonComponent,
		CapitalizePipe,
		NgFor,
		SharedModule
	],
	templateUrl: './product-list.component.html',
	styleUrl: './product-list.component.css'
})
export class ProductListComponent {
	products = ['apple', 'banana', 'orange'];

	constructor(public authService: AuthService) {}

	loginUser() {
		this.authService.login('admin', 'password');
	}

	logoutUser() {
		this.authService.logout();
	}
}
