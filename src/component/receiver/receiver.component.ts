import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
	selector: 'app-receiver',
	imports: [],
	templateUrl: './receiver.component.html',
	styleUrl: './receiver.component.css'
})
export class ReceiverComponent implements OnInit {
	message = '';

	constructor(private sharedService: SharedService) {}

	ngOnInit() {
		this.sharedService.message$.subscribe(msg => {
			this.message = msg;
		});
	}
}
