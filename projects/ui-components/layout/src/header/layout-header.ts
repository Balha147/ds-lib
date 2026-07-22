import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LibLayoutLogoComponent } from '../logo/layout-logo';
import { LibLayoutService } from '../shared/layout.service';

@Component({
    selector: 'lib-layout-header',
    imports: [LibLayoutLogoComponent],
    templateUrl: './layout-header.html',
})
export class LibLayoutHeaderComponent {
    private readonly libLayoutService = inject(LibLayoutService);

    protected readonly isNavOpened = this.libLayoutService.isNavOpened;

    protected toggleNav(): void {
        this.libLayoutService.toggleNav();
    }
}