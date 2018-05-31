import {Directive,ElementRef,HostListener,Input} from '@angular/core';
@Directive({
selector:'[appdirective]'


})
export class AppDirective
{
constructor(private el :ElementRef)
{


}
@Input() defaultcolor:string;
@Input('appdirective') highlightcolor:string;
@HostListener("mouseenter") onMouseEnter()
{
  
  this.highLight(this.highlightcolor|| this.defaultcolor|| 'black');
}

@HostListener("mouseout") onMouseOut()
{

  this.highLight(null);
}
private highLight(color:string)
{
  this. el.nativeElement.style.backgroundColor=color;

}

}