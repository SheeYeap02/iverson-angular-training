import { Component } from '@angular/core';
import {ZonelessAngularComponent} from "../../component/zoneless-angular/zoneless-angular.component";
import {StatsComponent} from "../../component/stats/stats.component";
import {ProductComponent} from "../../component/product/product.component";

@Component({
  selector: 'app-day-4',
	imports: [
		ZonelessAngularComponent,
		StatsComponent,
		ProductComponent
	],
  templateUrl: './day-4.component.html',
  styleUrl: './day-4.component.css'
})
export class Day4Component {

}
