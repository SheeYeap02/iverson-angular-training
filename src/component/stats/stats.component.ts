import {Component, computed, effect, inject} from '@angular/core';
import {StatsService} from "../../services/stats.service";

@Component({
	selector: 'app-stats',
	imports: [],
	templateUrl: './stats.component.html',
	styleUrl: './stats.component.css'
})
export class StatsComponent {
	private statsService = inject(StatsService);

	value = this.statsService.value;
	doubleValue = computed(() => this.value() * 2);

	constructor() {
		effect(() => {
			console.log('Stats changed:', this.value());
		});
	}

	update() {
		this.statsService.update();
	}

}
