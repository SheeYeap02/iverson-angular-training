import {ResolveFn} from '@angular/router';
import {of} from "rxjs";

// userResolver of type ResolveFn going to be created
// route - activated route [ route the resolver is attached to ]
// state - router state [ current router state ]
export const userResolver: ResolveFn<any> = (route, state) => {
	const id = route.paramMap.get('id');
	return of({name: "User " + id, id: id});
}