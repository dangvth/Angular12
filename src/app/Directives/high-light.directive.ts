import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {
  @Input() appHighLight = 'blue';

  constructor(private el: ElementRef) { 
    // this.el.nativeElement.style.color = this.appHighLight;
  }

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
  }

}
