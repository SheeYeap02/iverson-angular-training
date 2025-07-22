import {CanActivateFn} from '@angular/router';
import {of} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
	// Injecting a Service inside a function
	// const authService = inject(AuthService)
	// if (!authService.isLoggedIn()) { }

	const loggedIn = confirm('Are you logged in?');   // Replace with actual authentication
	return loggedIn;
};

// Try to add CanDeactivate guard to check are you sure to exit?

