import { Component } from '@angular/core';
import {ZonelessAngularComponent} from "../../component/zoneless-angular/zoneless-angular.component";
import {StatsComponent} from "../../component/stats/stats.component";

@Component({
  selector: 'app-day-4',
	imports: [
		ZonelessAngularComponent,
		StatsComponent
	],
  templateUrl: './day-4.component.html',
  styleUrl: './day-4.component.css'
})
export class Day4Component {

}
