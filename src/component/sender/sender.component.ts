import {Component} from '@angular/core';
import {SharedService} from "../../services/shared.service";

@Component({
	selector: 'app-sender',
	imports: [],
	templateUrl: './sender.component.html',
	styleUrl: './sender.component.css'
})
export class SenderComponent {
	constructor(private sharedService: SharedService) {}

	sendMessage(): void {
		this.sharedService.changeMessage('Data from Sender Component');
	}

}
