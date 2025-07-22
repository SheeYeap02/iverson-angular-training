import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export type ThemeMode = 'light' | 'dark';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {

	private themeMode$ = new BehaviorSubject<ThemeMode>('light');

	constructor() { }

	get currentTheme$(): Observable<ThemeMode> {
		return this.themeMode$.asObservable();
	}

	toggleTheme() {
		const current = this.themeMode$.getValue();
		const next = current === 'light' ? 'dark' : 'light';
		this.themeMode$.next(next);
	}

}
