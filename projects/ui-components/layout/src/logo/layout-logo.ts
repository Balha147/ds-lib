import { Component, inject } from '@angular/core';
import { LibLayoutService } from '../shared/layout.service';

@Component({
    selector: 'lib-layout-logo',
    templateUrl: './layout-logo.html',
})
export class LibLayoutLogoComponent {
    private readonly libLayoutService = inject(LibLayoutService);

    protected readonly logoConfig = this.libLayoutService.logoConfig;

    protected onClick(): void {
        this.libLayoutService.logoClicked.emit();
    }
}