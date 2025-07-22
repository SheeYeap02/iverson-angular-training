import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {NgForOf} from "@angular/common";
import {UserItemComponent} from "../user-item/user-item.component";
import {UserFormComponent} from "../user-form/user-form.component";

@Component({
	selector: 'app-user-list',
	imports: [
		NgForOf,
		UserItemComponent,
		UserFormComponent
	],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
	users: any[] = [];

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.userService.getUsers().subscribe((data: any[]) => {
			this.users = data;
		})
	}

	onAddUser(name: string) {
		this.userService.addUsers(name).subscribe((data: any[]) => {
			this.users = data;
		});
	}

	onDeleteUser(id: number) {
		this.userService.deleteUser(id).subscribe((data: any[]) => {
			this.users = data;
		});
	}
}
