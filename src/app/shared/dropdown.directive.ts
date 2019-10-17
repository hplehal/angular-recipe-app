import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]' 
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') onToggle(){
        this.isOpen = !this.isOpen;
    }
    // @HostListener('focusout') closeToggle(){
    //     this.isOpen = false;
    // }
    // @HostListener('document.click', ['$event']) onToggle(event: Event){
    //     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // }
    // constructor(private elRef: ElementRef){}
}