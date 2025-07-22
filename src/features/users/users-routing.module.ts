import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {authGuard} from "../../auth.guard";
import {userResolver} from "../../user.resolver";

const routes: Routes = [
	// localhost:4200/users
	// Nested routing
	{
		path: '',
		component: UserListComponent,
		canActivate: [authGuard],     // Add your auth guard here if needed
		children: [
			// localhost:4200/users/1,  // localhost:4200/users/2
			{
				path: ':id',
				component: UserDetailComponent,
				resolve: { user: userResolver }		// Resolve/Retrieve the user data before activating the route
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule {}
