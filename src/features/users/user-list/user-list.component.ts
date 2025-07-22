import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgFor} from "@angular/common";

@Component({
	selector: 'app-user-list',
	imports: [NgFor, RouterLink, RouterOutlet],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
