import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {CounterComponent} from "../../component/counter/counter.component";
import {Counter2Component} from "../../component/counter2/counter2.component";
import {CounterViewComponent} from "../../component/counter-view/counter-view.component";
import {EmployeeManagerComponent} from "../../component/employee-manager/employee-manager.component";

@Component({
  selector: 'app-day-3',
	imports: [
		RouterOutlet,
		CounterComponent,
		Counter2Component,
		CounterViewComponent,
		EmployeeManagerComponent
	],
  templateUrl: './day-3.component.html',
  styleUrl: './day-3.component.css'
})
export class Day3Component {

}
