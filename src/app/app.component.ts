import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ParentComponent} from "../component/parent/parent.component";
import {SenderComponent} from "../component/sender/sender.component";
import {ReceiverComponent} from "../component/receiver/receiver.component";
import {Parent2Component} from "../component/parent2/parent2.component";
import {HighlightDirective} from "../directives/highlight.directive";
import {UserListComponent} from "../component/user-list/user-list.component";
import {Day1Component} from "../pages/day-1/day-1.component";
import {Day2Component} from "../pages/day-2/day-2.component";
import {Day3Component} from "../pages/day-3/day-3.component";
import {Day4Component} from "../pages/day-4/day-4.component";

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'angular-training';
}
