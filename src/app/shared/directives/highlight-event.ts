import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightEvent]',
  standalone: false
})
export class HighlightEvent implements OnChanges {
  @Input() appHighlightEvent: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appHighlightEvent) {
      this.renderer.setStyle(this.el.nativeElement, 'border-left', '5px solid var(--accent-blue)');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#e0f7fa'); // Light cyan bg
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-left');
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

}