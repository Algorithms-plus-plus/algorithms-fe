import { AfterViewInit, DestroyRef, Directive, ElementRef, HostListener, inject, input, Renderer2, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Chapter } from '../chapters/chapter';
import { chapters } from '../chapters/chapters';
import { filter, take } from 'rxjs';
import { log } from 'console';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
    selector: '[appAccordionDropdownDirective]',
    standalone: true
})
export class AccordionDropdownDirective implements AfterViewInit {

    currentChapters = input(chapters);

    router = inject(Router); 
    elementRef = inject(ElementRef);
    renderer = inject(Renderer2); 
    destroyRef = inject(DestroyRef);

    constructor() { 
        
    }

    ngAfterViewInit(): void {
        this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd),
            take(1),
            takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((event: NavigationEnd) => {
            // see also 
            // https://angular.io/api/router/NavigationStart
            // https://angular.io/api/router/NavigationEnd
            // https://angular.io/api/router/NavigationCancel
            // https://angular.io/api/router/NavigationError
            const currentPath = event.urlAfterRedirects.split('/').slice(1);
            const sectionPath = this.getSectionPath(this.currentChapters(), currentPath, []);
            sectionPath.forEach(section => this.toggleByText(section));
        });
    }

    getSectionPath(chapter: Chapter[], currentPath: string[], path: string[]): string[] {
        for (let ch of chapter) {
            const newPath = [...path, ch.name];
            if (!!ch.navigate) {
                if (currentPath.length === ch.navigate.length && currentPath.every((value, index) => value === ch.navigate![index])) {
                    return newPath;
                }
            }
            if (!!ch.nextLevel)
                return this.getSectionPath(ch.nextLevel, currentPath, newPath);
        }

        return [];
    }

    toggleByText(text: string): void {
        const buttons = this.elementRef.nativeElement.querySelectorAll('.accordion-button'); 
        buttons.forEach((button: HTMLElement) => {
            if (button.textContent?.trim() === text) {
                debugger
                button.click();
            }
        });   
    }

    @HostListener('click', ['$event'])
    toggle(event: MouseEvent): void {
        // event.preventDefault();
        const button = (event.target as HTMLElement).closest('.accordion-button');
        // debugger;
        if (!button) return;
        if (button.classList.contains('point')) return;
        const collapseId = button.getAttribute('data-bs-target');
        if (!collapseId) return;

        event.stopPropagation();

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
