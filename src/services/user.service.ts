import {Injectable} from '@angular/core';
import {of} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private users = [
		{id: 1, name: 'Ali'},
		{id: 2, name: 'Ahmad'},
		{id: 3, name: 'Aisha'},
	]

	constructor() { }

	getUsers() {
		return of(this.users);
	}

	deleteUser(id: number) {
		this.users = this.users.filter(val => val.id !== id);
		return of(this.users);
	}

	addUsers(name: string) {
		const newUser = { id: this.users[this.users.length-1].id + 1, name: name };
		this.users = [...this.users, newUser];
		return of(this.users);
	}
}
