import { Component, computed, inject, input, OnInit } from '@angular/core';
import { AccordionDropdownDirective } from './directives/accordion-dropdown-directive';
import { chapters } from './chapters/chapters';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';


@Component({
    selector: 'app-side-nav',
    imports: [AccordionDropdownDirective, RouterModule],
    templateUrl: './side-nav.html',
    styleUrl: './side-nav.scss',
})
export class SideNav implements OnInit{

    router = inject(Router); 
    
    level = input(0);
    currentChapters = input(chapters);
    parentId = input('accordionParent');
    newParentId = computed(() => `${this.parentId()}${this.level()}`);
    headerId = input('headingChapter');
    newHeaderId = computed(() => `${this.headerId()}${this.level()}`);
    chapterId = input('chapter');
    newChapterId = computed(() => `${this.chapterId()}${this.level()}`);

    ngOnInit(): void {
        this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd)
        )
        .subscribe((event) => {
            // see also 
            // https://angular.io/api/router/NavigationStart
            // https://angular.io/api/router/NavigationEnd
            // https://angular.io/api/router/NavigationCancel
            // https://angular.io/api/router/NavigationError
            const url = (event as NavigationEnd).urlAfterRedirects;
            console.log('TTT', url);
        });
    }

    

    log(path?: string): void {
        console.log(`Navigating to ${path}`);
    }
}


