import { Component, inject } from '@angular/core';
import { LibLayoutService } from '../shared/layout.service';

@Component({
    selector: 'lib-layout-subnav',
    templateUrl: './layout-subnav.html',
})
export class LibLayoutSubnavComponent {
    private readonly libLayoutService = inject(LibLayoutService);

    protected toggleNav(): void {
        this.libLayoutService.toggleNav();
    }

    protected closeSubnav(): void {
        this.libLayoutService.closeSubnav();
    }
}