import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor( private eleref:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.eleref.nativeElement,'background-color','blue')
    
  }
  @HostBinding('style.background-color')bgcolor:string=''
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.eleref.nativeElement,'background-color','blue')
    this.bgcolor="purple"
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.eleref.nativeElement,'background-color','red')
    this.bgcolor="yellow"
  }


}
