import { EventEmitter, Service, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { hasNavlessInRoutesData } from './layout.utils';
import { LibLayoutLogoConfig, LibLayoutStateSnapshot } from './layout.types';

@Service()
export class LibLayoutService {
    private readonly router = inject(Router);

    private readonly _isNavOpened = signal(false);
    readonly isNavOpened = this._isNavOpened.asReadonly();

    private readonly _subnavContentId = signal<string | null>(null);
    readonly subnavContentId = this._subnavContentId.asReadonly();

    readonly isSubnavOpened = computed(() => this._subnavContentId() !== null);

    private readonly _isNavLess = signal(false);
    readonly isNavLess = this._isNavLess.asReadonly();

    readonly state = computed<LibLayoutStateSnapshot>(() => ({
        isNavLess: this._isNavLess(),
        isNavOpened: this._isNavOpened(),
        isSubnavOpened: this.isSubnavOpened(),
        subnavContentId: this._subnavContentId(),
    }));

    private readonly _logoConfig = signal<LibLayoutLogoConfig | undefined>(undefined);
    readonly logoConfig = this._logoConfig.asReadonly();

    readonly logoClicked = new EventEmitter<void>();

    private readonly navigationEnd = toSignal(
        this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    );

    constructor() {
        effect(() => {
            if (!this.navigationEnd()) return;
            this.closeMenu();
            this.setNavLessFromRoutesData();
        });
    }

    toggleNav(isNavOpened = !this._isNavOpened()): void {
        this._isNavOpened.set(isNavOpened);
        if (!isNavOpened && this._subnavContentId() !== null) {
            this.closeSubnav();
        }
    }

    closeSubnav(): void {
        this._subnavContentId.set(null);
    }

    openMenu(subnavContentId: string): void {
        this._isNavOpened.set(true);
        this._subnavContentId.set(subnavContentId);
    }

    closeMenu(): void {
        this._isNavOpened.set(false);
        this._subnavContentId.set(null);
    }

    toggleMenu(subnavContentId: string): void {
        if (!this._isNavOpened()) {
            this.openMenu(subnavContentId);
        } else if (this._subnavContentId() === subnavContentId) {
            this.closeMenu();
        } else {
            this._subnavContentId.set(subnavContentId);
        }
    }

    toggleNavLess(isNavLess = !this._isNavLess()): void {
        this._isNavLess.set(isNavLess);
    }

    setLogoConfig(config: LibLayoutLogoConfig): void {
        this._logoConfig.set(config);
    }

    private setNavLessFromRoutesData(): void {
        const isNavLess = hasNavlessInRoutesData([this.router.routerState.snapshot.root]);
        if (this._isNavLess() !== isNavLess) {
            this._isNavLess.set(isNavLess);
        }
    }
}