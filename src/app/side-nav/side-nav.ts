import { Component, computed, input } from '@angular/core';
import { AccordionDropdownDirective } from './directives/accordion-dropdown-directive';
import { chapters } from './chapters/chapters';


@Component({
    selector: 'app-side-nav',
    imports: [AccordionDropdownDirective],
    templateUrl: './side-nav.html',
    styleUrl: './side-nav.scss',
})
export class SideNav {
    level = input(0);
    currentChapters = input(chapters);
    parentId = input('accordionParent');
    newParentId = computed(() => `${this.parentId()}${this.level()}`);
    headerId = input('headingChapter');
    newHeaderId = computed(() => `${this.headerId()}${this.level()}`);
    chapterId = input('chapter');
    newChapterId = computed(() => `${this.chapterId()}${this.level()}`);
}


