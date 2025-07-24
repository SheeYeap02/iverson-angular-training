import {CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
	// Injecting a Service inside a function
	// const authService = inject(AuthService)
	// if (!authService.isLoggedIn()) { }

	if (typeof window !== 'undefined') {
		const loggedIn = window.confirm('Are you logged in?'); // Replace with actual authentication
		return loggedIn;
	}

	// In SSR or non-browser environment: deny access or default to false
	return false;
};

// Try to add CanDeactivate guard to check are you sure to exit?

