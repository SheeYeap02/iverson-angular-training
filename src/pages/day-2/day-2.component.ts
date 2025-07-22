import { Component } from '@angular/core';
import {CustomButtonComponent} from "../../component/shared/custom-button/custom-button.component";
import {ProductListComponent} from "../../features/product/product-list/product-list.component";
import {RegisterFormComponent} from "../../component/register-form/register-form.component";
import {UserListComponent} from "../../features/users/user-list/user-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-day-2',
	imports: [
		CustomButtonComponent,
		ProductListComponent,
		RegisterFormComponent,
		UserListComponent,
		RouterOutlet
	],
  templateUrl: './day-2.component.html',
  styleUrl: './day-2.component.css'
})
export class Day2Component {

}
