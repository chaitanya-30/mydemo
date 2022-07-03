import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[appTurnGreen]'
})
export class TurnGreenDirective{
constructor( private eleref: ElementRef ){
    console.log(eleref);
    eleref.nativeElement.style.background='green';
}
}