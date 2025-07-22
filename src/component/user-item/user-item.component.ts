import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'app-user-item',
	imports: [],
	templateUrl: './user-item.component.html',
	styleUrl: './user-item.component.css',
	// Most of the time, dumb component is marked as onPush
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent {

	@Input() user: any;
	@Output() delete = new EventEmitter<number>();

	deleteUser() {
		this.delete.emit(this.user.id);
	}

}
