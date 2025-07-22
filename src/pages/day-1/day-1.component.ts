import { Component } from '@angular/core';
import {HighlightDirective} from "../../directives/highlight.directive";
import {Parent2Component} from "../../component/parent2/parent2.component";
import {ParentComponent} from "../../component/parent/parent.component";
import {ReceiverComponent} from "../../component/receiver/receiver.component";
import {SenderComponent} from "../../component/sender/sender.component";
import {UserListComponent} from "../../component/user-list/user-list.component";

@Component({
  selector: 'app-day-1',
	imports: [
		HighlightDirective,
		Parent2Component,
		ParentComponent,
		ReceiverComponent,
		SenderComponent,
		UserListComponent
	],
  templateUrl: './day-1.component.html',
  styleUrl: './day-1.component.css'
})
export class Day1Component {

}
