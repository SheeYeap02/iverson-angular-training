import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-default-cd',
	imports: [],
	templateUrl: './default-cd.component.html',
	styleUrl: './default-cd.component.css'
})
export class DefaultCdComponent {

	@Input() user: any;

	ngDoCheck() {
		console.log('DefaultCDComponent checked');
	}

}
