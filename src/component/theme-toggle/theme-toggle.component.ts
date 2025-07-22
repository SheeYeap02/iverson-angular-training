import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
	selector: 'app-theme-toggle',
	imports: [
		NgClass,
		AsyncPipe
	],
	templateUrl: './theme-toggle.component.html',
	styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent implements OnInit {

	theme$!: Observable<string>;

	constructor(private themeService: ThemeService) {}

	ngOnInit() {
		this.theme$ = this.themeService.currentTheme$;
	}

	toggle() {
		this.themeService.toggleTheme();
	}

}
