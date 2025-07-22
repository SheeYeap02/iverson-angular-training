import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private messageSource = new BehaviorSubject<string>('Default message');
	message$ = this.messageSource.asObservable();

	changeMessage(newMessage: string) {
		this.messageSource.next(newMessage);
	}

}