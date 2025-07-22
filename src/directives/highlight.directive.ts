import {Directive, ElementRef, HostListener, Input} from '@angular/core';

// Input - To get property colors from the element/component
// HostListener - To listen to event on the element or component
// ElementRef - To DOM element that is calling directive : <p appHighlights='yellow'><p>

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {

	private defaultColor: string = 'yellow';
	private highlightColor: string = this.defaultColor;

	constructor(private el: ElementRef) { }

	@Input()
	set appHighlight(color: string) {
		this.highlightColor = color || this.defaultColor;
	}

	@HostListener('mouseenter') onMouseEnter() {
		// Example 1
		this.highlight(this.highlightColor);

		// Example 2
		// this.el.nativeElement.style.backgroundColor = this.highlightColor;
		// this.el.nativeElement.style.cursor = 'pointer';
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight('');
	}

	@HostListener('click') onClick() {
		this.el.nativeElement.style.backgroundColor =
			this.el.nativeElement.style.backgroundColor ? '' : this.highlightColor;

		this.el.nativeElement.style.cursor =
			this.el.nativeElement.style.backgroundColor ? 'default' : 'pointer';
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}


}
