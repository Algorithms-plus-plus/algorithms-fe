import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appAccordionDropdownDirective]',
    standalone: true
})
export class AccordionDropdownDirective {

    elementRef = inject(ElementRef);
    renderer = inject(Renderer2);  

    constructor() { }

    @HostListener('click', ['$event'])
    toggle(event: MouseEvent): void {
        // event.preventDefault();
        event.stopPropagation();
        const button = (event.target as HTMLElement).closest('.accordion-button');
        // debugger;
        if (!button) return;

        const collapseId = button.getAttribute('data-bs-target');
        if (!collapseId) return;

        const collapseElement = this.elementRef.nativeElement.querySelector(collapseId);

        if (collapseElement.classList.contains('show')) {
            this.renderer.removeClass(collapseElement, 'show');
            this.renderer.removeClass(button, 'collapsed');
        } else {
            // close any other open ones
            const allItems = this.elementRef.nativeElement.querySelectorAll('.accordion-collapse.show');
            allItems.forEach((item: HTMLElement) => {
                this.renderer.removeClass(item, 'show');
            });

            // open the clicked one
            this.renderer.addClass(collapseElement, 'show');
            this.renderer.addClass(button, 'collapsed');
        }
    }

}
