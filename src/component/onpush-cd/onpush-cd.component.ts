import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';

@Component({
	selector: 'app-onpush-cd',
	imports: [],
	templateUrl: './onpush-cd.component.html',
	styleUrl: './onpush-cd.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushCdComponent {
	@Input() user: any;

	constructor(private cdr: ChangeDetectorRef) {}

	ngDoCheck() {
		console.log('OnPushCDComponent checked');
	}

	// Force change checking so the name can be updated
	forceCheck() {
		this.cdr.markForCheck();
	}

}
