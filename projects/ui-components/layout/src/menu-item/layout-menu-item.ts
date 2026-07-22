import { Component, computed, inject, input } from '@angular/core';
import { LibLayoutService } from '../shared/layout.service';

@Component({
    selector: 'lib-layout-menu-item',
    templateUrl: './layout-menu-item.html',
    host: {
        class: 'lib-layout-menu-item lib-droplet lib-droplet--right',
        role: 'button',
        tabindex: '0',
        '[class.lib-layout-menu-item--opened]': 'isOpened()',
        '(click)': 'onClick()',
    },
})
export class LibLayoutMenuItemComponent {
    private readonly libLayoutService = inject(LibLayoutService);

    readonly contentId = input<string>();
    readonly icon = input('');

    protected readonly isOpened = computed(() => this.contentId() === this.libLayoutService.state().subnavContentId);

    protected onClick(): void {
        const id = this.contentId();
        if (!id) return;
        this.libLayoutService.toggleMenu(id);
    }
}